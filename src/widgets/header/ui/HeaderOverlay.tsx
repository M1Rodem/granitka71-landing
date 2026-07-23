import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { createClassName } from '@/shared/utils'
import { overlayVariants } from '@/shared/motion/variants'
import styles from './overlay.module.css'

interface HeaderOverlayProps {
  onClose: () => void
  className?: string
}

export const HeaderOverlay = forwardRef<HTMLDivElement, HeaderOverlayProps>(
  function HeaderOverlay({ onClose, className }, ref) {
    return (
      <motion.div
        className={createClassName(styles.overlay, className)}
        ref={ref}
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={onClose}
      />
    )
  },
)

HeaderOverlay.displayName = 'HeaderOverlay'