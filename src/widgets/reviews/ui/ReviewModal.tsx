import type { Review } from '@/entities/review'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Star, X } from 'lucide-react'

import { getImage } from '@/shared/lib/image/ImageRegistry'
import { Heading, Image, Text } from '@/shared/ui'

import styles from './review-modal.module.css'

export function ReviewModal({ review, onClose }: { review: Review; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onEsc)
    }
  }, [onClose])

  const image = getImage(review.imageId || 'placeholder')
  const hasRating = review.rating !== null && review.rating !== undefined
  const rating = review.rating ?? 0

  return (
    <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose}>
          <X size={22} />
        </button>
        <div className={styles.imageWrapper}>
          <Image image={image} className={styles.image} fit="cover" />
        </div>
        <div className={styles.content}>
          {hasRating && (
            <div className={styles.rating}>
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
          )}
          <Heading level={2}>{review.title}</Heading>
          <Text tone="accent" weight="semibold">
            {review.name}
          </Text>
          <div className={styles.divider} />
          <Text className={styles.text}>{review.text}</Text>
          <div className={styles.date}>
            <Calendar size={14} />
            <Text size="sm" tone="muted">
              {new Date(review.createdAt).toLocaleDateString('ru-RU')}
            </Text>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}