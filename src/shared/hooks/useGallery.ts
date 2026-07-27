import { useQuery } from '@tanstack/react-query'
import { galleryRepository } from '@/shared/repository'
import type { GalleryResponse } from '@/entities/gallery'

export const galleryKeys = {
  root: ['gallery'] as const,
}

export function useGallery() {
  return useQuery<GalleryResponse>({
    queryKey: galleryKeys.root,
    queryFn: () => galleryRepository.getGallery(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  })
}