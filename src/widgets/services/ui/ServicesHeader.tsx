import { motion } from 'framer-motion'
import { Blocks } from 'lucide-react'

import { createClassName } from '@/shared/utils'
import { slideUpVariants } from '@/shared/motion'
import { Heading, Text } from '@/shared/ui'

import styles from './services-header.module.css'

interface ServicesHeaderProps {
  className?: string
  eyebrow: string
  title: string
  description: string
}

export function ServicesHeader({
  className,
  eyebrow,
  title,
  description,
}: ServicesHeaderProps) {
  return (
    <motion.div
      className={createClassName(styles.content, className)}
      variants={slideUpVariants}
    >
      <div className={styles.eyebrow}>
        <Blocks size={16} className={styles.icon} />
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