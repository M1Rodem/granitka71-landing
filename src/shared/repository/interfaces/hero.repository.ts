import type { HeroResponse } from '@/entities/hero'

export interface HeroRepository {
  getHero(): Promise<HeroResponse>
}