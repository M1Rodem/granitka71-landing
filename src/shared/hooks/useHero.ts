import { useQuery } from '@tanstack/react-query'

import { heroRepository } from '@/shared/repository'

export const heroKeys = {
  root: ['hero'] as const,
}

export function useHero() {
  return useQuery({
    queryKey: heroKeys.root,
    queryFn: () => heroRepository.getHero(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  })
}