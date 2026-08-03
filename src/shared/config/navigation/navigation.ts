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
export const headerPhoneHref = 'tel:+79036590222'