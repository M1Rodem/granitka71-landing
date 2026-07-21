import type { HeroData } from '@/entities/hero'

export interface HeroRepository {
  getHero(): Promise<HeroData>
}