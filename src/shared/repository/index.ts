import type { HeroRepository } from './interfaces/hero.repository'
import type { ServiceRepository } from './interfaces/service.repository'
import type { CompanyRepository } from './interfaces/company.repository'

import { MockHeroRepository } from './mock/hero.mock.repository'
import { MockServiceRepository } from './mock/service.mock.repository'
import { MockCompanyRepository } from './mock/company.mock.repository'

export type { HeroRepository } from './interfaces/hero.repository'
export type { ServiceRepository } from './interfaces/service.repository'
export type { CompanyRepository } from './interfaces/company.repository'

export const heroRepository: HeroRepository =
  new MockHeroRepository()

export const serviceRepository: ServiceRepository =
  new MockServiceRepository()

export const companyRepository: CompanyRepository =
  new MockCompanyRepository()