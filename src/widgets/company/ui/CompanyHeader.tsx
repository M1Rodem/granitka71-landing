import { motion } from 'framer-motion'
import { createClassName } from '@/shared/utils'
import { Heading, Text } from '@/shared/ui'
import { Landmark } from 'lucide-react'
import { slideUpVariants } from '@/shared/motion'

import styles from './company-header.module.css'

interface CompanyHeaderProps {
  className?: string
  eyebrow: string
  title: string
}

export function CompanyHeader({
  className,
  eyebrow,
  title,
}: CompanyHeaderProps) {
  return (
    <motion.header
      className={createClassName(styles.header, className)}
      variants={slideUpVariants}
    >
      <div className={styles.eyebrow}>
        <Landmark size={16} className={styles.icon} />
        <Text 
          size="sm" 
          tone="accent" 
          weight="semibold"
          className={styles.eyebrowText}
        >
          {eyebrow}
        </Text>
      </div>

      <Heading className={styles.title} level={2}>
        {title}
      </Heading>
    </motion.header>
  )
}