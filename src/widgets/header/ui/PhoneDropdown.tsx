import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/shared/ui'

import styles from './phone-dropdown.module.css'

interface PhoneDropdownProps {
  phones: { label: string; href: string }[]
  ctaLabel: string
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export function PhoneDropdown({
  phones,
  ctaLabel,
  isOpen,
  onToggle,
  onClose,
}: PhoneDropdownProps) {
  const [position, setPosition] = useState({ top: 0, right: 0 })
  const buttonRef = useRef<HTMLDivElement>(null)

  // Рассчитываем позицию ТОЛЬКО когда дропдаун открывается
  useEffect(() => {
    if (!isOpen || !buttonRef.current) return

    const updatePosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setPosition({
          top: rect.bottom + 8,
          right: window.innerWidth - rect.right,
        })
      }
    }

    // Запускаем в макро-задаче, чтобы гарантированно получить правильные координаты
    requestAnimationFrame(updatePosition)
  }, [isOpen])

  // Закрытие по клику вне области и по Escape
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(`.${styles.dropdown}`) && !target.closest(`.${styles.trigger}`)) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <>
      <div ref={buttonRef} className={styles.triggerWrapper}>
        <Button
          onClick={onToggle}
          size="sm"
          variant="primary"
          className={styles.trigger}
        >
          <Phone size={16} />
          {ctaLabel}
          <ChevronDown 
            size={14} 
            className={isOpen ? styles.chevronOpen : styles.chevronClosed} 
          />
        </Button>
      </div>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.dropdown}
              style={{
                position: 'fixed',
                top: position.top,
                right: position.right,
                zIndex: 9999,
                // ВАЖНО: Анимация "вырастает" из кнопки
                transformOrigin: 'top right', 
              }}
              initial={{ opacity: 0, y: -8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.92 }}
              transition={{ 
                duration: 0.2, 
                ease: [0.22, 1, 0.36, 1] // Ваше фирменное замедление
              }}
            >
              <div className={styles.menu}>
                {phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className={styles.item}
                    onClick={onClose}
                  >
                    <Phone size={14} className={styles.itemIcon} />
                    {phone.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}