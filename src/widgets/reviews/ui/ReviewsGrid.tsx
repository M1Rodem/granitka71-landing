import type { Review } from '@/entities/review'

import { motion } from 'framer-motion'

import { staggerVariants } from '@/shared/motion'

import { ReviewCard } from './ReviewCard'

import styles from './reviews-grid.module.css'

export function ReviewsGrid({ reviews, onReviewClick }: { reviews: Review[]; onReviewClick?: (review: Review) => void }) {
  return (
    <motion.div className={styles.grid} variants={staggerVariants} initial="initial" animate="animate">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} onClick={() => onReviewClick?.(review)} />
      ))}
    </motion.div>
  )
}