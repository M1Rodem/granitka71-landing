import { useEffect } from 'react'

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