import type { ImageSource } from './types'

export function buildSrcSet(sources: ImageSource[]): string {
  return sources.map((s) => `${s.src} ${s.width}w`).join(', ')
}