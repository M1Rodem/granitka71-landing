import type { ReviewsData } from './review.types'

export interface ReviewsResponse extends ReviewsData {
  updatedAt?: string
}