import { motion } from 'framer-motion'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

import styles from './burger-button.module.css'

interface BurgerButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  isOpen: boolean
  onToggle: () => void
}

export const BurgerButton = forwardRef<HTMLButtonElement, BurgerButtonProps>(
  function BurgerButton({ isOpen, onToggle, className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={`${styles.burger} ${className || ''}`}
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        onClick={onToggle}
        type="button"
        {...props}
      >
        <span className={styles.burgerLines}>
          <motion.span
            className={styles.burgerLine}
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 0 : -6,
              scale: isOpen ? 0.8 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 28,
            }}
          />
          <motion.span
            className={styles.burgerLine}
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0 : 1,
              width: isOpen ? 0 : '100%',
            }}
            transition={{
              duration: 0.15,
            }}
          />
          <motion.span
            className={styles.burgerLine}
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? 0 : 6,
              scale: isOpen ? 0.8 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 28,
            }}
          />
        </span>
      </button>
    )
  },
)

BurgerButton.displayName = 'BurgerButton'