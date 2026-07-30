import type { FooterData } from '@/entities/footer'

export const footerMock: FooterData = {
  company: {
    name: 'Гранитка71',
    description: 'Изготавливаем памятники и мемориальные комплексы с уважением к памяти близких с 2008 года.',
  },
  navigation: [
    { id: 'home', label: 'Главная', href: '#hero' },
    { id: 'about', label: 'О компании', href: '#about' },
    { id: 'services', label: 'Услуги', href: '#services' },
    { id: 'why-choose-us', label: 'Почему мы', href: '#why-choose-us' },
    { id: 'gallery', label: 'Работы', href: '#gallery' },
    { id: 'reviews', label: 'Отзывы', href: '#reviews' },
    { id: 'contacts', label: 'Контакты', href: '#contacts' },
  ],
  contacts: {
    phone: '+7 (960) 616-03-00',
    phoneLabel: 'Позвонить',
    email: 'info@granitka71.ru',
    emailLabel: 'Написать',
  },
  socials: [
    {
      id: 'telegram',
      label: 'Telegram',
      href: 'https://t.me/granitka71',
      icon: 'telegram',
    },
    {
      id: 'max',
      label: 'MAX',
      href: 'https://max.ru/...',
      icon: 'max',
    },
    {
      id: 'vk',
      label: 'VK',
      href: '#',
      icon: 'vk',
    },
  ],
  addresses: [
    {
      id: 'shop',
      title: 'Киреевский магазин',
      address: 'ул. Геологов, 13В, Киреевск, Тульская область, 301260',
      coordinates: [53.93205, 37.919712],
    },
    {
      id: 'cemetery',
      title: 'Киреевское кладбище',
      address: 'Тульская область, городское поселение Киреевск, городское кладбище на въезде',
      coordinates: [53.951051, 37.922135],
    },
  ],
  legal: {
    fullName: 'Ли Александр Валентинович',
    ogrnip: '312715418400331',
    inn: '1103082992595',
  },
}