import type { ServicesResponse } from '@/entities/service'

export interface ServiceRepository {
  getServices(): Promise<ServicesResponse>
}