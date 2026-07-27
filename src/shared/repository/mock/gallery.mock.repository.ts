import type { GalleryRepository } from '../interfaces/gallery.repository'
import type { GalleryResponse } from '@/entities/gallery'
import { galleryMock } from '@/shared/mocks/gallery.mock'

export class MockGalleryRepository implements GalleryRepository {
  async getGallery(): Promise<GalleryResponse> {
    return {
      ...galleryMock,
      updatedAt: new Date().toISOString(),
    }
  }
}