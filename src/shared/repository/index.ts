import type { HeroRepository } from './interfaces/hero.repository'
import type { ServiceRepository } from './interfaces/service.repository'
import type { CompanyRepository } from './interfaces/company.repository'
import type { WhyChooseUsRepository } from './interfaces/why-choose-us.repository'

import { MockHeroRepository } from './mock/hero.mock.repository'
import { MockServiceRepository } from './mock/service.mock.repository'
import { MockCompanyRepository } from './mock/company.mock.repository'
import { MockWhyChooseUsRepository } from './mock/why-choose-us.mock.repository'

export type { HeroRepository } from './interfaces/hero.repository'
export type { ServiceRepository } from './interfaces/service.repository'
export type { CompanyRepository } from './interfaces/company.repository'
export type { WhyChooseUsRepository } from './interfaces/why-choose-us.repository'

export const heroRepository: HeroRepository = new MockHeroRepository()

export const serviceRepository: ServiceRepository = new MockServiceRepository()

export const companyRepository: CompanyRepository = new MockCompanyRepository()

export const whyChooseUsRepository: WhyChooseUsRepository = new MockWhyChooseUsRepository()