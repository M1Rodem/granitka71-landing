import type { FooterRepository } from '../interfaces/footer.repository'
import type { FooterResponse } from '@/entities/footer'
import { footerMock } from '@/shared/mocks/footer.mock'

export class MockFooterRepository implements FooterRepository {
  async getFooter(): Promise<FooterResponse> {
    return {
      ...footerMock,
      updatedAt: new Date().toISOString(),
    }
  }
}