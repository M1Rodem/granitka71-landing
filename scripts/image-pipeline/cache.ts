import fs from 'node:fs'
import { CACHE_FILE } from './utils.js'

export interface Cache {
  [key: string]: {
    sourceHash: string
    generatedAt: string
  }
}

export function loadCache(): Cache {
  if (fs.existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'))
    } catch {
      return {}
    }
  }
  return {}
}

export function saveCache(cache: Cache): void {
  if (Object.keys(cache).length === 0) {
    if (fs.existsSync(CACHE_FILE)) fs.unlinkSync(CACHE_FILE)
    return
  }
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2))
}