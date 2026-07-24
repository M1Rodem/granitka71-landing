import type { ServiceRepository } from '../interfaces/service.repository'
import type { ServicesResponse } from '@/entities/service'
import { servicesMock } from '@/shared/mocks/services.mock'

export class MockServiceRepository implements ServiceRepository {
  async getServices(): Promise<ServicesResponse> {
    return {
      ...servicesMock,
      updatedAt: new Date().toISOString(),
    }
  }
}