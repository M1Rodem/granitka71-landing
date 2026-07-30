import { useQuery } from '@tanstack/react-query'
import { footerRepository } from '@/shared/repository'
import type { FooterResponse } from '@/entities/footer'

export const footerKeys = {
  root: ['footer'] as const,
}

export function useFooter() {
  return useQuery<FooterResponse>({
    queryKey: footerKeys.root,
    queryFn: () => footerRepository.getFooter(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  })
}