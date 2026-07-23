// widgets/header/model/types.ts

import type { NavigationItem } from '@/shared/config/navigation'

/**
 * Состояние хедера
 */
export interface HeaderState {
  /** Закреплён ли хедер (скролл > 0) */
  isScrolled: boolean
  /** Открыто ли мобильное меню */
  isMenuOpen: boolean
  /** Текущий хеш URL (для активных ссылок) */
  currentHash: string
  /** Высота хедера в пикселях */
  headerHeight: number
}

/**
 * Пропсы для координатора Header
 */
export interface HeaderProps {
  /** Элементы навигации */
  items?: NavigationItem[]
  /** Метка CTA кнопки */
  ctaLabel?: string
  /** Ссылка для CTA */
  ctaHref?: string
}

/**
 * Состояние Glass Pill в навигации
 */
export interface PillState {
  /** X-координата (px) */
  x: number
  /** Y-координата (px) */
  y: number
  /** Ширина (px) */
  width: number
  /** Высота (px) */
  height: number
  /** Видимость */
  visible: boolean
}

/**
 * Рефы для навигационных элементов
 */
export interface NavigationRefs {
  [key: string]: HTMLLIElement | null
}

/**
 * Конфигурация анимаций хедера
 */
export interface HeaderMotionConfig {
  /** Спринг-параметры для Glass Pill */
  pillSpring: {
    stiffness: number
    damping: number
    mass: number
  }
  /** Длительность анимации появления */
  appearDuration: number
  /** Длительность анимации исчезновения */
  disappearDuration: number
}