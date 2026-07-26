import type { WhyChooseUsRepository } from '../interfaces/why-choose-us.repository'
import type { WhyChooseUsResponse } from '@/entities/why-choose-us'

import { whyChooseUsMock } from '@/shared/mocks/why-choose-us.mock'

export class MockWhyChooseUsRepository
  implements WhyChooseUsRepository
{
  async getWhyChooseUs(): Promise<WhyChooseUsResponse> {
    return {
      ...whyChooseUsMock,
      updatedAt: new Date().toISOString(),
    }
  }
}