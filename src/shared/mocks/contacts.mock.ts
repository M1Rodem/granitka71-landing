import type { ContactData } from '@/entities/contact'

export const contactsMock: ContactData = {
  header: {
    eyebrow: 'Контакты',
    title: 'Свяжитесь с нами',
    description:
      'Бесплатно проконсультируем, ответим на вопросы и поможем подобрать оптимальное решение.',
  },

  contacts: [
    {
      id: 'phone',
      type: 'phone',
      title: 'Телефон',
      value: '+7 903 659-02-22, +7 950 904-66-77, +7 960 603-25-75',
      href: 'tel:+79036590222',
      buttonLabel: 'Позвонить',
      phones: [
        { value: '+7 903 659-02-22', href: 'tel:+79036590222' },
        { value: '+7 950 904-66-77', href: 'tel:+79509046677' },
        { value: '+7 960 603-25-75', href: 'tel:+79606032575' },
      ],
    },
    {
      id: 'whatsapp',
      type: 'whatsapp',
      title: 'WhatsApp',
      href: 'https://wa.me/79036590222',
      buttonLabel: 'Написать в WhatsApp',
    },
    {
      id: 'email',
      type: 'email',
      title: 'Email',
      value: 'granitka71@gmail.com',
      href: 'mailto:granitka71@gmail.com',
      buttonLabel: 'Написать',
    },
    {
      id: 'telegram',
      type: 'telegram',
      title: 'Telegram',
      href: 'https://t.me/+79036590222',
      buttonLabel: 'Написать в Telegram',
    },
    {
      id: 'max',
      type: 'max',
      title: 'MAX',
      href: 'https://max.ru/u/f9LHodD0cOI8E2SkCudYIsL30W2F4gFuDMdY5FCgWG5s9XAHyMp4LuiB2NQ',
      buttonLabel: 'Открыть MAX',
    },
  ],

  locations: [
    {
        id: 'shop',

        title: 'Киреевский магазин',

        address: 'ул. Геологов, 13В, Киреевск, Тульская область, 301260',

        coordinates: [53.93205, 37.919712],
        twoGis: {
            city: 'kireevsk',
            objectId: '70000001030379315',
        },
    },

    {
        id: 'cemetery',

        title: 'Киреевское кладбище',

        address:
        'Тульская область, городское поселение Киреевск, городское кладбище на въезде',

        coordinates: [53.951051, 37.922135],
        twoGis: {
            city: 'tula',
            objectId: '70030076438497824',
        },
    },
  ]
}