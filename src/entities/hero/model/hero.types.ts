import type { HeroAction } from './hero-action.types'
import type { HeroAdvantage } from './hero-advantage.types'

export interface HeroData {
  eyebrow: string
  title: string
  highlightedTitle?: string
  subtitle: string
  advantages: HeroAdvantage[]
  primaryAction: HeroAction
  secondaryAction?: HeroAction
}

export interface HeroResponse extends HeroData {
  updatedAt?: string
}