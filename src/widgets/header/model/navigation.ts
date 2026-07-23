import type { NavigationItem } from '@/shared/config/navigation'

export const headerNavigationItems: NavigationItem[] = [
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
export const headerPhoneHref = 'tel:+79000000000'