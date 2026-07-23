import type { CompanyRepository } from '../interfaces/company.repository'
import type { CompanyResponse } from '@/entities/company'
import { companyMock } from '@/shared/mocks/company.mock'

export class MockCompanyRepository implements CompanyRepository {
  async getCompany(): Promise<CompanyResponse> {
    return {
      ...companyMock,
      updatedAt: new Date().toISOString(),
    }
  }
}