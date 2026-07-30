import type { FooterResponse } from '@/entities/footer'

export interface FooterRepository {
  getFooter(): Promise<FooterResponse>
}