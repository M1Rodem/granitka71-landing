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

      value: '+7 (960) 616-03-00',

      href: 'tel:+79606160300',

      buttonLabel: 'Позвонить',
    },

    {
      id: 'email',

      type: 'email',

      title: 'Email',

      value: 'info@granitka71.ru',

      href: 'mailto:info@granitka71.ru',

      buttonLabel: 'Написать',
    },

    {
      id: 'telegram',

      type: 'telegram',

      title: 'Telegram',

      value: '@granitka71',

      href: 'https://t.me/granitka71',

      buttonLabel: 'Открыть Telegram',
    },
    {
        id: 'max',
        type: 'max',

        title: 'MAX',

        value: '@granitka71',

        href: 'https://max.ru/...',

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