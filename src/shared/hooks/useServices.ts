import { useQuery } from '@tanstack/react-query'
import { serviceRepository } from '@/shared/repository'
import type { ServicesResponse } from '@/entities/service'

export const serviceKeys = {
  root: ['services'] as const,
}

export function useServices() {
  return useQuery<ServicesResponse>({
    queryKey: serviceKeys.root,
    queryFn: () => serviceRepository.getServices(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  })
}