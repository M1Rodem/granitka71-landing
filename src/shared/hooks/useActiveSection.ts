import { useEffect, useRef, useState } from 'react'

interface UseActiveSectionOptions {
  sectionIds: string[]
}

export function useActiveSection({ sectionIds }: UseActiveSectionOptions) {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const findClosestSection = () => {
      const center = window.innerHeight / 2
      let closest: HTMLElement | null = null
      let minDistance = Infinity

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const distance = Math.abs(elementCenter - center)

        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible && distance < minDistance) {
          minDistance = distance
          closest = element
        }
      }

      if (closest) {
        const id = closest.id
        setActiveSection(id)
      }
    }

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(findClosestSection)
    }

    const timer = setTimeout(() => {
      findClosestSection()
      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('resize', handleScroll, { passive: true })
    }, 300)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [sectionIds])

  return activeSection
}