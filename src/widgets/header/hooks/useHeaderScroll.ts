// widgets/header/hooks/useHeaderScroll.ts

import { useEffect, useState } from 'react'

/**
 * Отслеживает скролл и возвращает флаг isScrolled
 * Использует passive listener для производительности
 */
export function useHeaderScroll(): boolean {
  const [isScrolled, setIsScrolled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.scrollY > 0
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0
      // Обновляем состояние только если оно изменилось
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
    }

    // Используем passive: true для улучшения производительности
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Начальная проверка
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isScrolled
}