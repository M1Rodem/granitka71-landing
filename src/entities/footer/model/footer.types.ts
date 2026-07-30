import type { FooterAddress } from './footer-address.types'
import type { FooterCompany } from './footer-company.types'
import type { FooterContacts } from './footer-contacts.types'
import type { FooterLegal } from './footer-legal.types'
import type { FooterNavigationItem } from './footer-navigation.types'
import type { FooterSocial } from './footer-social.types'

export interface FooterData {
  company: FooterCompany
  navigation: FooterNavigationItem[]
  contacts: FooterContacts
  socials: FooterSocial[]
  addresses: FooterAddress[]
  legal: FooterLegal
}

export interface FooterResponse extends FooterData {
  updatedAt?: string
}