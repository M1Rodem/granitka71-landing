import type { HeroRepository } from './interfaces/hero.repository'
import type { ServiceRepository } from './interfaces/service.repository'
import type { CompanyRepository } from './interfaces/company.repository'
import type { WhyChooseUsRepository } from './interfaces/why-choose-us.repository'
import type { GalleryRepository } from './interfaces/gallery.repository'
import type { ReviewRepository } from './interfaces/review.repository'
import type { ContactRepository } from './interfaces/contact.repository'

import { MockHeroRepository } from './mock/hero.mock.repository'
import { MockServiceRepository } from './mock/service.mock.repository'
import { MockCompanyRepository } from './mock/company.mock.repository'
import { MockWhyChooseUsRepository } from './mock/why-choose-us.mock.repository'
import { MockGalleryRepository } from './mock/gallery.mock.repository'
import { MockReviewRepository } from './mock/review.mock.repository'
import { MockContactRepository } from './mock/contact.mock.repository'

export type { HeroRepository } from './interfaces/hero.repository'
export type { ServiceRepository } from './interfaces/service.repository'
export type { CompanyRepository } from './interfaces/company.repository'
export type { WhyChooseUsRepository } from './interfaces/why-choose-us.repository'
export type { GalleryRepository } from './interfaces/gallery.repository'
export type { ReviewRepository } from './interfaces/review.repository'
export type { ContactRepository } from './interfaces/contact.repository'

export const heroRepository: HeroRepository = new MockHeroRepository()
export const serviceRepository: ServiceRepository = new MockServiceRepository()
export const companyRepository: CompanyRepository = new MockCompanyRepository()
export const whyChooseUsRepository: WhyChooseUsRepository = new MockWhyChooseUsRepository()
export const galleryRepository: GalleryRepository = new MockGalleryRepository()
export const reviewRepository: ReviewRepository = new MockReviewRepository()
export const contactRepository: ContactRepository = new MockContactRepository()