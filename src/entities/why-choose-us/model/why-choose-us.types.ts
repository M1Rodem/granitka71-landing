export interface WhyChooseUsHeaderData {
  eyebrow: string
  title: string
  description: string
}

export interface WhyChooseUsAction {
  label: string
  href: string
}

export interface WhyChooseUsMainCard {
  icon: string
  title: string
  description: string
  action: WhyChooseUsAction
}

export interface WhyChooseUsCard {
  id: string
  icon: string
  title: string
  description: string
  action: WhyChooseUsAction
  isVisible: boolean
  order: number
}

export interface WhyChooseUsData {
  header: WhyChooseUsHeaderData
  mainCard: WhyChooseUsMainCard
  cards: WhyChooseUsCard[]
}

export interface WhyChooseUsResponse extends WhyChooseUsData {
  updatedAt?: string
}