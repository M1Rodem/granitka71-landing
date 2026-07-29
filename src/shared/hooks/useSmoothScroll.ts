import { useCallback } from 'react'

const HEADER_OFFSET = 80

export function useSmoothScroll() {
  const scrollTo = useCallback((targetId: string) => {
    const element = document.getElementById(targetId)
    if (!element) return

    const rect = element.getBoundingClientRect()
    const top = rect.top + window.scrollY - HEADER_OFFSET

    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  return scrollTo
}