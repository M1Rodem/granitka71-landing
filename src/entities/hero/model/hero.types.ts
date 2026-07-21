import type { HeroAdvantage } from './hero-advantage.types'

export interface HeroAction {
  label: string
  href: string
}

export interface HeroData {
  eyebrow: string

  title: string

  highlightedTitle?: string

  subtitle: string

  image: string

  advantages: HeroAdvantage[]

  primaryAction: HeroAction

  secondaryAction?: HeroAction
}