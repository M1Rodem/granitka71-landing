export interface ContactsHeaderData {
  eyebrow: string
  title: string
  description: string
}

export type ContactType =
  | 'phone'
  | 'email'
  | 'telegram'
  | 'whatsapp'
  | 'max'
  | 'website'
  | 'address'

export interface PhoneItem {
  value: string
  href: string
  label?: string
}

export interface ContactItem {
  id: string
  type: ContactType
  title: string
  value?: string
  phones?: PhoneItem[]
  href: string
  buttonLabel: string
}

export interface ContactLocation {
  id: string
  title: string
  address: string

  coordinates: [number, number]

  twoGis: {
    city: string
    objectId: string
  }
}

export interface ContactData {
  header: ContactsHeaderData

  contacts: ContactItem[]

  locations: ContactLocation[]
}

export interface ContactResponse extends ContactData {
  updatedAt?: string
}