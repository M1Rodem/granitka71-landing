import type { WhyChooseUsResponse } from '@/entities/why-choose-us'

export interface WhyChooseUsRepository {
  getWhyChooseUs(): Promise<WhyChooseUsResponse>
}