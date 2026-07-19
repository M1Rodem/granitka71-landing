import type { Service } from '@/entities/service'

import type { ServiceRepository } from '../interfaces/service.repository'

import { servicesMock } from '@/shared/mocks/services.mock'


export class MockServiceRepository
  implements ServiceRepository
{
  async getAll(): Promise<Service[]> {
    return servicesMock
      .filter(
        (service) => service.isVisible,
      )
      .sort(
        (a, b) => a.order - b.order,
      )
  }
}