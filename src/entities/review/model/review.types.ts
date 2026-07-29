export interface ReviewsHeaderData {
  eyebrow: string
  title: string
  description: string
}

export interface ReviewsCTAData {
  title: string
  description: string
  buttonLabel: string
}

export interface Review {
  id: string
  name: string
  title: string
  text: string
  rating: number | null
  imageId: string
  createdAt: string
  updatedAt?: string
  order: number
  isVisible: boolean
  isPinned?: boolean
  status: 'pending' | 'published' | 'rejected'
}

export interface ReviewsData {
  header: ReviewsHeaderData
  cta: ReviewsCTAData
  reviews: Review[]
}