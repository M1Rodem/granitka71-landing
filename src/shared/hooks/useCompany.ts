import { useQuery } from '@tanstack/react-query'
import { companyRepository } from '@/shared/repository'

export const companyKeys = {
  root: ['company'] as const,
}

export function useCompany() {
  return useQuery({
    queryKey: companyKeys.root,
    queryFn: () => companyRepository.getCompany(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  })
}