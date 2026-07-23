export interface ImageData {
  src: string

  alt: string

  width: number

  height: number

  loading?: 'lazy' | 'eager'

  decoding?: 'sync' | 'async' | 'auto'

  fetchPriority?: 'high' | 'low' | 'auto'
}