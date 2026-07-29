import { motion } from 'framer-motion'
import { MapPinned } from 'lucide-react'

import { slideUpVariants } from '@/shared/motion'
import { createClassName } from '@/shared/utils'
import { Heading, Text } from '@/shared/ui'

import styles from './contacts-header.module.css'

interface ContactsHeaderProps {
  className?: string
  eyebrow: string
  title: string
  description: string
}

export function ContactsHeader({
  className,
  eyebrow,
  title,
  description,
}: ContactsHeaderProps) {
  return (
    <motion.div
      className={createClassName(styles.content, className)}
      variants={slideUpVariants}
    >
      <div className={styles.eyebrow}>
        <MapPinned
          size={16}
          className={styles.icon}
        />

        <Text
          size="sm"
          tone="accent"
          weight="semibold"
          className={styles.eyebrowText}
        >
          {eyebrow}
        </Text>
      </div>

      <Heading
        level={2}
        className={styles.heading}
      >
        {title}
      </Heading>

      <Text
        size="lg"
        tone="muted"
        className={styles.description}
      >
        {description}
      </Text>
    </motion.div>
  )
}