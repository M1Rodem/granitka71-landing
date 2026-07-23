import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import {
  ORIGINALS_DIR,
  DEFAULT_BREAKPOINTS,
  getFileHash,
  calculateAspectRatio,
  checkGeneratedFilesExist,
} from './utils.js'
import { generateAllFormats } from './generator-format.js'
import type { ImageMeta } from './metadata.js'
import type { ImageManifestEntry } from '../../src/shared/lib/image/types.js'
import type { Cache } from './cache.js'

export async function processImage(
  filename: string,
  meta: Record<string, ImageMeta>,
  cache: Cache
): Promise<{ name: string; entry: ImageManifestEntry } | null> {
  const name = path.parse(filename).name
  const inputPath = path.join(ORIGINALS_DIR, filename)
  if (!fs.existsSync(inputPath)) return null

  const imageMeta = meta[name] || { alt: filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') }
  const breakpoints = imageMeta.breakpoints || DEFAULT_BREAKPOINTS
  const currentHash = getFileHash(inputPath)

  // Проверяем кэш
  if (cache[name]?.sourceHash === currentHash && checkGeneratedFilesExist(name, breakpoints)) {
    return null
  }

  const metadata = await sharp(inputPath).metadata()
  if (!metadata.width || !metadata.height) return null

  const aspectRatio = calculateAspectRatio(metadata.width, metadata.height)

  const formats = {
    avif: [] as Array<{ src: string; width: number; height: number; format: 'avif' }>,
    webp: [] as Array<{ src: string; width: number; height: number; format: 'webp' }>,
    fallback: [] as Array<{ src: string; width: number; height: number }>,
  }

  for (const width of breakpoints) {
    const height = Math.round(width / aspectRatio)

    // Генерируем все форматы и получаем реальные размеры
    const sizes = await generateAllFormats(inputPath, name, width, height)

    formats.avif.push({
      src: `/images/generated/${name}-${width}.avif`,
      width: sizes.avifWidth,
      height: sizes.avifHeight,
      format: 'avif',
    })
    formats.webp.push({
      src: `/images/generated/${name}-${width}.webp`,
      width: sizes.webpWidth,
      height: sizes.webpHeight,
      format: 'webp',
    })
    formats.fallback.push({
      src: `/images/generated/${name}-${width}.jpg`,
      width: sizes.jpgWidth,
      height: sizes.jpgHeight,
    })
  }

  cache[name] = { sourceHash: currentHash, generatedAt: new Date().toISOString() }

  const entry: ImageManifestEntry = {
    id: name,
    alt: imageMeta.alt,
    width: metadata.width,
    height: metadata.height,
    aspectRatio,
    sizes: imageMeta.sizes,
    loading: imageMeta.loading,
    fetchPriority: imageMeta.fetchPriority,
    formats,
  }

  return { name, entry }
}