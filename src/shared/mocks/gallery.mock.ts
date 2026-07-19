import type { GalleryItem } from '@/entities/gallery'

import { mockMedia } from './media.mock'


export const galleryMock: GalleryItem[] = [

  {
    id:'gallery-1',

    title:
      'Гранитный памятник',

    description:
      'Индивидуальное изготовление',

    image:
      mockMedia.monument,

    category:
      'Памятники',

    order:
      1,

    isVisible:
      true,
  },

]