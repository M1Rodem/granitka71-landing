import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'

export const ROOT = path.resolve(process.cwd())
export const ORIGINALS_DIR = path.join(ROOT, 'public/images/originals')
export const GENERATED_DIR = path.join(ROOT, 'public/images/generated')
export const MANIFEST_DIR = path.join(ROOT, '.generated/images')
export const CACHE_FILE = path.join(ROOT, '.image-cache.json')

export const DEFAULT_BREAKPOINTS = [480, 768, 1024] // 1440 убран
export const QUALITY = { avif: 55, jpg: 82 } // webp убран
export const CONCURRENCY = 4

export function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

export function getFileHash(filepath: string): string {
  const content = fs.readFileSync(filepath)
  return createHash('sha256').update(content).digest('hex').substring(0, 16)
}

export function getImageFiles(): string[] {
  if (!fs.existsSync(ORIGINALS_DIR)) return []
  const files = fs.readdirSync(ORIGINALS_DIR)
  return files.filter(
    (f) => /\.(jpg|jpeg|png|webp)$/i.test(f) && f !== 'image-meta.json'
  )
}

export function checkConflicts(files: string[]): boolean {
  const names = new Map<string, string>()
  let hasConflict = false
  for (const f of files) {
    const name = path.parse(f).name
    if (names.has(name)) {
      console.error(`[images] Conflict: ${f} and ${names.get(name)} -> "${name}"`)
      hasConflict = true
    } else {
      names.set(name, f)
    }
  }
  return hasConflict
}

export function calculateAspectRatio(w: number, h: number): number {
  return Number((w / h).toFixed(3))
}

export function checkGeneratedFilesExist(name: string, breakpoints: number[]): boolean {
  for (const width of breakpoints) {
    for (const ext of ['avif', 'jpg']) { // webp убран
      const p = path.join(GENERATED_DIR, `${name}-${width}.${ext}`)
      if (!fs.existsSync(p)) return false
    }
  }
  return true
}