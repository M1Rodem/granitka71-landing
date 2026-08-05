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
    phone: '+7 903 659-02-22',
    phoneLabel: 'Позвонить',
    phones: [
      { value: '+7 903 659-02-22', href: 'tel:+79036590222' },
      { value: '+7 950 904-66-77', href: 'tel:+79509046677' },
      { value: '+7 960 603-25-75', href: 'tel:+79606032575' },
    ],
    email: 'granitka71@gmail.com',
    emailLabel: 'Написать',
  },
  socials: [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/79036590222',
      icon: 'whatsapp',
    },
    {
      id: 'telegram',
      label: 'Telegram',
      href: 'https://t.me/+79036590222',
      icon: 'telegram',
    },
    {
      id: 'max',
      label: 'MAX',
      href: 'https://max.ru/u/f9LHodD0cOI8E2SkCudYIsL30W2F4gFuDMdY5FCgWG5s9XAHyMp4LuiB2NQ',
      icon: 'max',
    },
    {
      id: 'vk',
      label: 'VK',
      href: 'https://vk.ru/granitka71.kireevsk',
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