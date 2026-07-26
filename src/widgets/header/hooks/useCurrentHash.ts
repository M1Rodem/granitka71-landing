import { useEffect, useState } from 'react'

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