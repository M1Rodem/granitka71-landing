import type { ContactRepository } from '../interfaces/contact.repository'

import type { ContactResponse } from '@/entities/contact'

import { contactsMock } from '@/shared/mocks/contacts.mock'

export class MockContactRepository implements ContactRepository {
  async getContacts(): Promise<ContactResponse> {
    return {
      ...contactsMock,
      updatedAt: new Date().toISOString(),
    }
  }
}