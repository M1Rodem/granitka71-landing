import { useQuery } from '@tanstack/react-query'
import { reviewRepository } from '@/shared/repository'
import type { ReviewsResponse } from '@/entities/review'

export const reviewKeys = {
  root: ['reviews'] as const,
}

export function useReviews() {
  return useQuery<ReviewsResponse>({
    queryKey: reviewKeys.root,
    queryFn: () => reviewRepository.getReviews(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  })
}