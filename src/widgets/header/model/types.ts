import type { NavigationItem } from '@/shared/config/navigation'

export interface HeaderState {
  isScrolled: boolean
  isMenuOpen: boolean
  currentHash: string
  headerHeight: number
}

export interface HeaderProps {
  items?: NavigationItem[]
  ctaLabel?: string
  ctaHref?: string
}

export interface PillState {
  x: number
  y: number
  width: number
  height: number
  visible: boolean
}

export interface NavigationRefs {
  [key: string]: HTMLLIElement | null
}

export interface HeaderMotionConfig {
  pillSpring: {
    stiffness: number
    damping: number
    mass: number
  }
  appearDuration: number
  disappearDuration: number
}