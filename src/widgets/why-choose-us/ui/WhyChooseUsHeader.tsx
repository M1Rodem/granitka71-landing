import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

import { slideUpVariants } from '@/shared/motion'
import { Heading, Text } from '@/shared/ui'
import { createClassName } from '@/shared/utils'

import styles from './WhyChooseUsHeader.module.css'

interface WhyChooseUsHeaderProps {
  className?: string
  eyebrow: string
  title: string
  description: string
}

export function WhyChooseUsHeader({
  className,
  eyebrow,
  title,
  description,
}: WhyChooseUsHeaderProps) {
  return (
    <motion.div
      className={createClassName(styles.content, className)}
      variants={slideUpVariants}
    >
      <div className={styles.eyebrow}>
        <ShieldCheck size={16} className={styles.icon} />
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