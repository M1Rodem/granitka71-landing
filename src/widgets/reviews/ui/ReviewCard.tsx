import type { Review } from '@/entities/review'

import { motion } from 'framer-motion'
import { Calendar, ChevronRight, Star } from 'lucide-react'

import { fadeInVariants } from '@/shared/motion'
import { getImage } from '@/shared/lib/image/ImageRegistry'
import { Image, Surface, Text } from '@/shared/ui'

import styles from './review-card.module.css'

export function ReviewCard({ review, onClick }: { review: Review; onClick?: () => void }) {
  const image = getImage(review.imageId || 'placeholder')
  const hasRating = review.rating !== null && review.rating !== undefined
  const rating = review.rating ?? 0

  return (
    <motion.div variants={fadeInVariants}>
      <Surface className={styles.card} onClick={onClick} role="button" tabIndex={0}>
        <div className={styles.imageWrapper}>
          <Image image={image} className={styles.image} fit="cover" />
          <div className={styles.nameBadge}>
            <Text size="sm" weight="semibold" tone="inverse">
              {review.name}
            </Text>
          </div>
          <div className={styles.infoPanel}>
            <Text size="md" weight="semibold" tone="inverse">
              {review.title}
            </Text>
            {hasRating && (
              <div className={styles.rating}>
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.textWrapper}>
          <Text tone="muted" className={styles.text}>
            {review.text}
          </Text>
          <div className={styles.footer}>
            <div className={styles.date}>
              <Calendar size={14} />
              <Text size="sm" tone="muted">
                {new Date(review.createdAt).toLocaleDateString('ru-RU')}
              </Text>
            </div>
            <span className={styles.more}>
              Читать полностью <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </Surface>
    </motion.div>
  )
}