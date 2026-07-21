import { useEffect, useState } from 'react'

import type { HeroData } from '@/entities/hero'
import { heroRepository } from '@/shared/repository'

export function useHero() {
  const [data, setData] = useState<HeroData | null>(null)

  useEffect(() => {
    heroRepository
      .getHero()
      .then(setData)
  }, [])

  return {
    data,
    isLoading: data === null,
  }
}