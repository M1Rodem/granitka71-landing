export interface NavigationItem {
  href: string
  id: string
  label: string
}

export const landingNavigationItems: NavigationItem[] = [
  {
    id: 'hero',
    label: 'Главная',
    href: '#hero',
  },
  {
    id: 'about',
    label: 'О компании',
    href: '#about',
  },
  {
    id: 'services',
    label: 'Услуги',
    href: '#services',
  },
  {
    id: 'why-choose-us',
    label: 'Почему мы',
    href: '#why-choose-us',
  },
  {
    id: 'gallery',
    label: 'Работы',
    href: '#gallery',
  },
  {
    id: 'reviews',
    label: 'Отзывы',
    href: '#reviews',
  },
  {
    id: 'contacts',
    label: 'Контакты',
    href: '#contacts',
  },
]

export const headerCtaLabel = 'Позвонить'

export const headerPhones = [
  { label: '+7 903 659-02-22', href: 'tel:+79036590222' },
  { label: '+7 950 904-66-77', href: 'tel:+79509046677' },
  { label: '+7 960 603-25-75', href: 'tel:+79606032575' },
]

export const headerPhoneHref = headerPhones[0].href