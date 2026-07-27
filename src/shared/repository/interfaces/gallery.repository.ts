import type { GalleryResponse } from '@/entities/gallery'

export interface GalleryRepository {
  getGallery(): Promise<GalleryResponse>
}