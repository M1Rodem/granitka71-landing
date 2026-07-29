import type { ReviewsResponse } from '@/entities/review'

export interface ReviewRepository {
  getReviews(): Promise<ReviewsResponse>
}