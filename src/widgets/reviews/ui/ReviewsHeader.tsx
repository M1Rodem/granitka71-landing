import { motion } from 'framer-motion'
import { MessageSquareQuote } from 'lucide-react'

import { slideUpVariants } from '@/shared/motion'
import { createClassName } from '@/shared/utils'
import { Heading, Text } from '@/shared/ui'

import styles from './reviews-header.module.css'

export function ReviewsHeader({ className, eyebrow, title, description }: ReviewsHeaderProps) {
  return (
    <motion.div className={createClassName(styles.content, className)} variants={slideUpVariants}>
      <div className={styles.eyebrow}>
        <MessageSquareQuote size={16} className={styles.icon} />
        <Text size="sm" tone="accent" weight="semibold" className={styles.eyebrowText}>
          {eyebrow}
        </Text>
      </div>
      <Heading level={2} className={styles.heading}>
        {title}
      </Heading>
      <Text size="lg" tone="muted" className={styles.description}>
        {description}
      </Text>
    </motion.div>
  )
}

interface ReviewsHeaderProps {
  className?: string
  eyebrow: string
  title: string
  description: string
}