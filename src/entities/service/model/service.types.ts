export type ServiceVariant = 'hero' | 'primary' | 'compact'

export interface ServicesHeaderData {
  eyebrow: string
  title: string
  description: string
}

export interface ServicesCTAData {
  title: string
  description: string
  phone: string
  phoneLabel: string
  buttonLabel: string
  buttonHref: string
}

export interface Service {
  id: string
  variant: ServiceVariant
  title: string
  shortDescription: string
  description?: string
  price?: string
  advantages?: string[]
  isVisible: boolean
  order: number
}

export interface ServicesData {
  header: ServicesHeaderData
  cta: ServicesCTAData
  services: Service[]
}

export interface ServicesResponse extends ServicesData {
  updatedAt?: string
}