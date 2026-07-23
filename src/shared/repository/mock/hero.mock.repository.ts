import type { HeroRepository } from '../interfaces/hero.repository'
import type { HeroResponse } from '@/entities/hero'
import { heroMock } from '@/shared/mocks/hero.mock'

export class MockHeroRepository implements HeroRepository {
  async getHero(): Promise<HeroResponse> {
    return {
      ...heroMock,
      updatedAt: new Date().toISOString(),
    }
  }
}