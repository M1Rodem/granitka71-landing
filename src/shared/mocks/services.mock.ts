import type { Service } from '@/entities/service'

import { mockMedia } from './media.mock'


export const servicesMock: Service[] = [

  {
    id: 'service-1',

    title:
      'Изготовление памятников из гранита',

    shortDescription:
      'Изготовление памятников любой сложности из качественного камня',

    description:
      'Создание памятников с индивидуальным дизайном и профессиональной установкой.',

    image:
      mockMedia.monument,

    price:
      'от 25 000 ₽',

    advantages: [
      'Индивидуальный дизайн',
      'Качественный гранит',
      'Профессиональная установка',
    ],

    isVisible: true,

    order: 1,
  },


  {
    id: 'service-2',

    title:
      'Благоустройство мест захоронения',

    shortDescription:
      'Комплексное оформление и уход за территорией',

    image:
      mockMedia.landscaping,

    isVisible: true,

    order: 2,
  },

]