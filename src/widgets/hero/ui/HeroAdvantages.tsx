import {
  Award,
  Gem,
  ShieldCheck,
} from 'lucide-react'
import { motion } from 'framer-motion'

import type { HeroAdvantage } from '@/entities/hero'
import { Card, Text } from '@/shared/ui'
import { slideUpVariants, staggerVariants } from '@/shared/motion'

import styles from './hero-advantages.module.css'

interface HeroAdvantagesProps {
  advantages: HeroAdvantage[]
}

const advantageIcons = [
  Award,
  Gem,
  ShieldCheck,
]

export function HeroAdvantages({
  advantages,
}: HeroAdvantagesProps) {
  return (
    <motion.div
      animate="animate"
      className={styles.wrapper}
      initial="initial"
      variants={staggerVariants}
    >
      {advantages.map((advantage, index) => {
        const Icon = advantageIcons[index]

        return (
          <motion.div
            key={advantage.label}
            variants={slideUpVariants}
          >
            <Card className={styles.card}>
              <div className={styles.icon}>
                <Icon size={24} />
              </div>

              <Text
                as="strong"
                className={styles.value}
                weight="semibold"
              >
                {advantage.value}
              </Text>

              <Text
                size="lg"
                tone="muted"
              >
                {advantage.label}
              </Text>

              <Text
                size="sm"
                tone="muted"
                className={styles.description}
              >
                {advantage.description}
              </Text>
            </Card>
          </motion.div>
        )
      })}
    </motion.div>
  )
}