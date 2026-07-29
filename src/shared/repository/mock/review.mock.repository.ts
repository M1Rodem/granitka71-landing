import type { ReviewRepository } from '../interfaces/review.repository'
import type { ReviewsResponse } from '@/entities/review'
import { reviewsMock } from '@/shared/mocks/reviews.mock'

export class MockReviewRepository implements ReviewRepository {
  async getReviews(): Promise<ReviewsResponse> {
    return {
      ...reviewsMock,
      updatedAt: new Date().toISOString(),
    }
  }
}