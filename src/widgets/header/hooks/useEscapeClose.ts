// widgets/header/hooks/useEscapeClose.ts

import { useEffect } from 'react'

/**
 * Закрывает меню по Escape
 * @param isActive - активен ли слушатель
 * @param onClose - колбэк закрытия
 */
export function useEscapeClose(
  isActive: boolean,
  onClose: () => void,
): void {
  useEffect(() => {
    if (!isActive) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive, onClose])
}