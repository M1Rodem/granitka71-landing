import { useState, useCallback, type MouseEvent } from 'react'
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

const advantageIcons = {
  experience: Award,
  projects: Gem,
  quality: ShieldCheck,
}

function AdvantageCard({ advantage }: { advantage: HeroAdvantage }) {
  const Icon = advantageIcons[advantage.type]
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({})
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 30
    const rotateY = (centerX - x) / 30

    setTiltStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`,
      transition: 'transform 0.15s ease-out',
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.5s ease-out',
    })
    setIsHovered(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  return (
    <motion.div variants={slideUpVariants}>
      <Card
        className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
        style={tiltStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className={styles.header}>
          <div className={styles.icon}>
            <Icon size={20} />
          </div>
          <Text
            size="sm"
            tone="muted"
            weight="semibold"
            className={styles.label}
          >
            {advantage.label}
          </Text>
        </div>

        <Text
          as="strong"
          className={styles.value}
          weight="semibold"
        >
          {advantage.value}
        </Text>

        <div className={styles.divider} />

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
}

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
      {advantages.map((advantage) => (
        <AdvantageCard key={advantage.type} advantage={advantage} />
      ))}
    </motion.div>
  )
}