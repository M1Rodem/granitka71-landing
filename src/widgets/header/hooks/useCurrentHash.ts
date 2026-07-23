// widgets/header/hooks/useCurrentHash.ts

import { useEffect, useState } from 'react'

/**
 * Возвращает текущий хеш из URL
 * Обновляется при hashchange
 */
export function useCurrentHash(): string {
  const [currentHash, setCurrentHash] = useState<string>(() => {
    if (typeof window === 'undefined') return ''
    return window.location.hash
  })

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    // Начальное значение
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return currentHash
}