import { useQuery } from '@tanstack/react-query'

import type { ContactResponse } from '@/entities/contact'

import { contactRepository } from '@/shared/repository'

export const contactKeys = {
  root: ['contacts'] as const,
}

export function useContacts() {
  return useQuery<ContactResponse>({
    queryKey: contactKeys.root,
    queryFn: () => contactRepository.getContacts(),

    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,

    retry: 1,
  })
}