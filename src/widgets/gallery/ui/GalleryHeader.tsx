import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

import { createClassName } from '@/shared/utils'
import { slideUpVariants } from '@/shared/motion'
import { Heading, Text } from '@/shared/ui'

import styles from './gallery-header.module.css'

interface GalleryHeaderProps {
  className?: string
  eyebrow: string
  title: string
  description: string
}

export function GalleryHeader({
  className,
  eyebrow,
  title,
  description,
}: GalleryHeaderProps) {
  return (
    <motion.div
      className={createClassName(styles.content, className)}
      variants={slideUpVariants}
    >
      <div className={styles.eyebrow}>
        <ImageIcon size={16} className={styles.icon} />
        <Text
          size="sm"
          tone="accent"
          weight="semibold"
          className={styles.eyebrowText}
        >
          {eyebrow}
        </Text>
      </div>

      <Heading className={styles.heading} level={2}>
        {title}
      </Heading>

      <Text className={styles.description} size="lg" tone="muted">
        {description}
      </Text>
    </motion.div>
  )
}