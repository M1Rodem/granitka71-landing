import fs from 'node:fs'
import path from 'node:path'
import { MANIFEST_DIR, GENERATED_DIR, ensureDir } from './utils.js'
import type { ImageManifestEntry } from '../../src/shared/lib/image/types.js'

interface ManifestData {
  version: number
  generatedAt: string
  generator: string
  images: Record<string, ImageManifestEntry>
}

export function loadManifest(): ManifestData | null {
  const p = path.join(MANIFEST_DIR, 'manifest.json')
  if (!fs.existsSync(p)) return null
  try {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'))
    return data.images ? data : null
  } catch {
    return null
  }
}

export function saveManifest(images: Record<string, ImageManifestEntry>): void {
  ensureDir(MANIFEST_DIR)
  const manifest: ManifestData = {
    version: 1,
    generatedAt: new Date().toISOString(),
    generator: 'image-pipeline',
    images,
  }

  const manifestPath = path.join(MANIFEST_DIR, 'manifest.json')
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))

  // index.ts — с типизацией
  const indexContent = `// AUTO-GENERATED — DO NOT EDIT
import manifest from './manifest.json'
import type { ImageManifest } from '../../src/shared/lib/image/types'

export const imageManifest = manifest.images as ImageManifest
export default manifest
`
  fs.writeFileSync(path.join(MANIFEST_DIR, 'index.ts'), indexContent)

  // types.ts
  const typesContent = `import type { ImageManifestEntry } from '../../src/shared/lib/image/types'

export type ImageManifest = Record<string, ImageManifestEntry>
`
  fs.writeFileSync(path.join(MANIFEST_DIR, 'types.ts'), typesContent)
}

export function cleanOrphanFiles(manifest: Record<string, ImageManifestEntry>): void {
  if (!fs.existsSync(GENERATED_DIR)) return

  const valid = new Set<string>()
  for (const entry of Object.values(manifest)) {
    for (const f of entry.formats.avif) {
      valid.add(f.src.replace('/images/generated/', ''))
    }
    for (const f of entry.formats.webp) {
      valid.add(f.src.replace('/images/generated/', ''))
    }
    for (const f of entry.formats.fallback) {
      valid.add(f.src.replace('/images/generated/', ''))
    }
  }

  let removed = 0
  for (const file of fs.readdirSync(GENERATED_DIR)) {
    if (!valid.has(file)) {
      fs.unlinkSync(path.join(GENERATED_DIR, file))
      removed++
    }
  }
  if (removed > 0) {
    console.log(`[images] Removed ${removed} orphan file(s)`)
  }
}