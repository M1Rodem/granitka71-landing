import type { CompanyResponse } from '@/entities/company'

export interface CompanyRepository {
  getCompany(): Promise<CompanyResponse>
}