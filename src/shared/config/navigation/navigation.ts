export interface NavigationItem {
  href: string
  id: string
  label: string
}

export const landingNavigationItems: NavigationItem[] = [
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
