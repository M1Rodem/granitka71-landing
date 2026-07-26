import { useQuery } from '@tanstack/react-query'

import { whyChooseUsRepository } from '@/shared/repository'

export const whyChooseUsKeys = {
  root: ['why-choose-us'] as const,
}

export function useWhyChooseUs() {
  return useQuery({
    queryKey: whyChooseUsKeys.root,
    queryFn: () => whyChooseUsRepository.getWhyChooseUs(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  })
}