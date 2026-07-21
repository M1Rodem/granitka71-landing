import type { ServiceRepository } from './interfaces/service.repository'
import type { HeroRepository } from './interfaces/hero.repository'

import { MockServiceRepository } from './mock/service.mock.repository'
import { MockHeroRepository } from './mock/hero.mock.repository'


export type { HeroRepository } from './interfaces/hero.repository'


export const serviceRepository: ServiceRepository =
  new MockServiceRepository()


export const heroRepository: HeroRepository =
  new MockHeroRepository()