import path from 'node:path'
import pLimit from 'p-limit'
import {
  ORIGINALS_DIR,
  GENERATED_DIR,
  MANIFEST_DIR,
  CONCURRENCY,
  DEFAULT_BREAKPOINTS,
  ensureDir,
  getImageFiles,
  checkConflicts,
  getFileHash,
  checkGeneratedFilesExist,
} from './utils.js'
import { loadCache, saveCache } from './cache.js'
import { loadManifest, saveManifest, cleanOrphanFiles } from './manifest.js'
import { loadMeta } from './metadata.js'
import { processImage } from './generator.js'

export async function buildImages(fileName?: string): Promise<void> {
  ensureDir(GENERATED_DIR)
  ensureDir(MANIFEST_DIR)

  const images = getImageFiles()
  const meta = loadMeta()

  if (images.length === 0) {
    saveManifest({})
    saveCache({})
    return
  }

  if (checkConflicts(images)) {
    throw new Error('[images] Name conflicts detected')
  }

  const toProcess = fileName
    ? images.filter((f) => path.parse(f).name === fileName)
    : images

  if (fileName && toProcess.length === 0) {
    throw new Error(`[images] File ${fileName} not found`)
  }

  const cache = loadCache()
  const existingManifest = loadManifest()
  const manifest = existingManifest ? { ...existingManifest.images } : {}
  const limit = pLimit(CONCURRENCY)

  let updated = 0
  let cached = 0

  // Проверяем кэш и решаем, нужно ли генерировать
  const toGenerate: string[] = []
  const cachedNames: string[] = []

  for (const img of toProcess) {
    const name = path.parse(img).name
    const inputPath = path.join(ORIGINALS_DIR, img)
    const currentHash = getFileHash(inputPath)

    const breakpoints = meta[name]?.breakpoints || DEFAULT_BREAKPOINTS
    const cachedHash = cache[name]?.sourceHash

    // Правильное сравнение: новый SHA с SHA из кэша
    const isCached =
      cachedHash === currentHash &&
      checkGeneratedFilesExist(name, breakpoints) &&
      manifest[name]

    if (isCached) {
      cachedNames.push(name)
    } else {
      toGenerate.push(img)
    }
  }

  // Генерируем только те, что не в кэше
  await Promise.all(
    toGenerate.map((img) =>
      limit(async () => {
        const result = await processImage(img, meta, cache)
        if (result) {
          manifest[result.name] = result.entry
          updated++
        }
        return result
      })
    )
  )

  for (const name of cachedNames) {
    if (manifest[name]) {
      cached++
    }
  }

  saveManifest(manifest)
  saveCache(cache)
  cleanOrphanFiles(manifest)

  if (updated > 0 || cached > 0) {
    console.log(`Images: ${toProcess.length} checked, ${updated} updated, ${cached} cached`)
  }
}