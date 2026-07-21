import type { HeroRepository } from './interfaces/hero.repository'

import { MockHeroRepository } from './mock/hero.mock.repository'

export const heroRepository: HeroRepository =
  new MockHeroRepository()