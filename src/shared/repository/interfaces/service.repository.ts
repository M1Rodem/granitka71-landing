import type { Service } from '@/entities/service'


export interface ServiceRepository {
  getAll(): Promise<Service[]>
}