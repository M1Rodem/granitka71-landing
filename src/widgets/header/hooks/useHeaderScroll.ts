import { useEffect, useState } from 'react'

export function useHeaderScroll(): boolean {
  const [isScrolled, setIsScrolled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.scrollY > 0
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isScrolled
}