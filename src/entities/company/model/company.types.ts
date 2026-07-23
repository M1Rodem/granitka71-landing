import type { CompanyScrollLink } from './company-scroll-link.types'

export interface CompanyData {
  eyebrow: string
  title: string
  description: string[]
  scrollLink: CompanyScrollLink
}

export interface CompanyResponse extends CompanyData {
  updatedAt?: string
}