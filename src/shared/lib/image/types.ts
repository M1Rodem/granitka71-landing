export type ImageFormat = 'avif' | 'jpeg' | 'png'

export interface ImageSource {
  src: string
  width: number
  height: number
  format?: ImageFormat
}

export interface ImageManifestEntry {
  id: string
  alt: string
  width: number
  height: number
  aspectRatio: number
  sizes?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  formats: {
    avif: ImageSource[]
    fallback: ImageSource[]
  }
}

export interface ImageManifest {
  [key: string]: ImageManifestEntry
}

export interface ImageComponentProps {
  image: ImageManifestEntry
  className?: string
  fit?: 'cover' | 'contain' | 'fill'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}