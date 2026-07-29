import { MessageSquarePlus } from 'lucide-react'
import { motion } from 'framer-motion'

import { slideUpVariants } from '@/shared/motion'
import { Button, Heading, Surface, Text } from '@/shared/ui'

import styles from './reviews-cta.module.css'

export function ReviewsCTA({ title, description, buttonLabel, onClick }: ReviewsCTAProps) {
  return (
    <motion.div variants={slideUpVariants}>
      <Surface className={styles.cta}>
        <div className={styles.content}>
          <Heading level={2} size="3">
            {title}
          </Heading>
          <Text size="lg" tone="muted">
            {description}
          </Text>
        </div>
        <div className={styles.actions}>
          <Button onClick={onClick}>
            <MessageSquarePlus size={18} />
            {buttonLabel}
          </Button>
        </div>
      </Surface>
    </motion.div>
  )
}

interface ReviewsCTAProps {
  title: string
  description: string
  buttonLabel: string
  onClick: () => void
}