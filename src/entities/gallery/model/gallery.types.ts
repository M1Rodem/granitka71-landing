export interface GalleryHeaderData {
  eyebrow: string
  title: string
  description: string
}

export interface GalleryCTAData {
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
}

export interface GalleryItem {
  id: string
  imageId: string
  title: string
  description: string
  isVisible: boolean
  order: number
  reviewId?: string
}

export interface GalleryData {
  header: GalleryHeaderData
  cta: GalleryCTAData
  items: GalleryItem[]
}

export interface GalleryResponse extends GalleryData {
  updatedAt?: string
}