export interface FooterPhone {
  value: string
  href: string
}

export interface FooterContacts {
  phone: string
  phoneLabel: string
  phones?: FooterPhone[]
  email: string
  emailLabel: string
}