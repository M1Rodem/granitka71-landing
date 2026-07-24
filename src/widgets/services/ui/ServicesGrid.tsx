import type { Service } from '@/entities/service'

import { motion } from 'framer-motion'

import { staggerVariants } from '@/shared/motion'

import { ServicesCompactCard } from './ServicesCompactCard'
import { ServicesHeroCard } from './ServicesHeroCard'
import { ServicesHorizontalCard } from './ServicesHorizontalCard'
import { ServicesPrimaryCard } from './ServicesPrimaryCard'
import { ServicesVerticalCard } from './ServicesVerticalCard'

import styles from './services-grid.module.css'

interface ServicesGridProps {
  hero: Service
  primary: Service[]
  compact: Service[]
}

export function ServicesGrid({
  hero,
  primary,
  compact,
}: ServicesGridProps) {
  const [horizontal, vertical] = primary
  const [featuredCompact, ...compactCards] = compact

  return (
    <motion.div
      className={styles.grid}
      variants={staggerVariants}
    >
      <div className={styles.hero}>
        <ServicesHeroCard service={hero} />
      </div>

      <div className={styles.vertical}>
        <ServicesVerticalCard service={vertical} />
      </div>

      <div className={styles.horizontal}>
        <ServicesHorizontalCard service={horizontal} />
      </div>

      <div className={styles.featuredCompact}>
        <ServicesPrimaryCard service={featuredCompact} />
      </div>

      <div className={styles.compact}>
        {compactCards.map((service) => (
          <ServicesCompactCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </motion.div>
  )
}