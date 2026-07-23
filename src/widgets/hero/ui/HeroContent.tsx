import type { HeroData } from '@/entities/hero'

import { Gem } from 'lucide-react'
import { motion } from 'framer-motion'

import { Heading, Text } from '@/shared/ui'
import { slideUpVariants } from '@/shared/motion'

import styles from './HeroContent.module.css'

interface HeroContentProps {
  data: HeroData
}

export function HeroContent({
  data,
}: HeroContentProps) {
  return (
    <motion.div
      className={styles.content}
      variants={slideUpVariants}
    >
      <div className={styles.eyebrow}>
        <Gem size={16} />
        <Text size="md" tone="accent" weight="semibold">
          {data.eyebrow}
        </Text>
      </div>

      <Heading level={1} size="1">
        {data.title}
        {data.highlightedTitle ? (
          <>
            {' '}
            <span className={styles.highlight}>
              {data.highlightedTitle}
            </span>
          </>
        ) : null}
      </Heading>

      <Text size="lg" tone="muted">
        {data.subtitle}
      </Text>
    </motion.div>
  )
}