import { useEffect } from 'react'

export function useBodyScrollLock(shouldLock: boolean): void {
  useEffect(() => {
    if (!shouldLock) return

    const originalStyles = {
      overflow: document.documentElement.style.overflow,
      bodyOverflow: document.body.style.overflow,
      bodyPosition: document.body.style.position,
      bodyWidth: document.body.style.width,
      bodyTop: document.body.style.top,
    }

    const scrollY = window.scrollY

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${scrollY}px`

    return () => {
      document.documentElement.style.overflow = originalStyles.overflow
      document.body.style.overflow = originalStyles.bodyOverflow
      document.body.style.position = originalStyles.bodyPosition
      document.body.style.width = originalStyles.bodyWidth
      document.body.style.top = originalStyles.bodyTop

      window.scrollTo(0, scrollY)
    }
  }, [shouldLock])
}