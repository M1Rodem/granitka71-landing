import { imageManifest } from '@generated/images'
import type { ImageManifestEntry, ImageManifest } from './types'

const manifest = imageManifest as ImageManifest

const PLACEHOLDER: ImageManifestEntry = {
  id: 'placeholder',
  alt: 'Placeholder image',
  width: 800,
  height: 600,
  aspectRatio: 1.333,
  formats: {
    avif: [{ src: '/placeholder.avif', width: 800, height: 600, format: 'avif' }],
    fallback: [{ src: '/placeholder.jpg', width: 800, height: 600 }],
  },
}

const isDev = import.meta.env.DEV

export function getImage<T extends keyof ImageManifest>(id: T): ImageManifestEntry {
  const image = manifest[id as string]
  if (!image) {
    const msg = `Image "${String(id)}" not found in manifest`
    if (isDev) {
      throw new Error(msg)
    }
    console.error(msg)
    return PLACEHOLDER
  }
  return image
}

export function getImageOrPlaceholder(id: string): ImageManifestEntry {
  return manifest[id] || PLACEHOLDER
}

export function tryGetImage(id: string): ImageManifestEntry | null {
  return manifest[id] || null
}

export function hasImage(id: string): boolean {
  return !!manifest[id]
}

export function getAllImages(): string[] {
  return Object.keys(manifest)
}

export function getManifest(): Readonly<ImageManifest> {
  return manifest
}