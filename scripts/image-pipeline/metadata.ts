import fs from 'node:fs'
import path from 'node:path'
import { ORIGINALS_DIR } from './utils.js'

export interface ImageMeta {
  alt: string
  breakpoints?: number[]
  sizes?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function loadMeta(): Record<string, ImageMeta> {
  const p = path.join(ORIGINALS_DIR, 'image-meta.json')
  if (!fs.existsSync(p)) return {}
  try {
    return JSON.parse(fs.readFileSync(p, 'utf-8'))
  } catch {
    return {}
  }
}