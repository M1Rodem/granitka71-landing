import type { Media } from '@/entities/media'


export const mockMedia = {
  monument: {
    id: 'media-1',
    url: '/images/monument.webp',
    alt: 'Гранитный памятник',
    width: 800,
    height: 600,
    type: 'image',
  },

  landscaping: {
    id: 'media-2',
    url: '/images/landscaping.webp',
    alt: 'Благоустройство места захоронения',
    width: 800,
    height: 600,
    type: 'image',
  },
} satisfies Record<string, Media>