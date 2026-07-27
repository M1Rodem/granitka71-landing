import { useEffect, useCallback } from 'react'

import type { GalleryItem } from '@/entities/gallery'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { Image } from '@/shared/ui'
import { getImage } from '@/shared/lib/image/ImageRegistry'

import styles from './gallery-lightbox.module.css'

interface GalleryLightboxProps {
  item: GalleryItem
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  currentIndex: number
  total: number
}

export function GalleryLightbox({
  item,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  total,
}: GalleryLightboxProps) {
  const image = getImage(item.imageId)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      onClick={onClose}
    >
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.92, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{
          duration: 0.4,
          ease: [0.2, 0.8, 0.2, 1],
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Закрыть"
        >
          <X size={22} strokeWidth={2} />
        </button>

        {/* counter */}
        <div className={styles.counter}>
          {currentIndex + 1} / {total}
        </div>

        {/* item with crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            className={styles.itemInner}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
          >
            <div className={styles.imageWrapper}>
              <Image
                image={image}
                className={styles.image}
                fit="contain"
              />
            </div>

            <div className={styles.info}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* navigation */}
        <button
          className={`${styles.nav} ${styles.navPrev}`}
          onClick={onPrev}
          aria-label="Предыдущая"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>

        <button
          className={`${styles.nav} ${styles.navNext}`}
          onClick={onNext}
          aria-label="Следующая"
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </motion.div>
    </motion.div>
  )
}