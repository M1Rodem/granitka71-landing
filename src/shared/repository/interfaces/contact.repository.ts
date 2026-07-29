import type { ContactResponse } from '@/entities/contact'

export interface ContactRepository {
  getContacts(): Promise<ContactResponse>
}