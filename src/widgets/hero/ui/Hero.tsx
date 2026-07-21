import { motion } from 'framer-motion'

import { useHero } from '@/shared/hooks'
import { staggerVariants } from '@/shared/motion'
import { Container, Section } from '@/shared/ui'

import { HeroActions } from './HeroActions'
import { HeroAdvantages } from './HeroAdvantages'
import { HeroContent } from './HeroContent'
import { HeroVisual } from './HeroVisual'

import styles from './hero.module.css'

export function Hero() {
  const { data, isLoading } = useHero()

  if (isLoading || !data) {
    return null
  }

  return (
    <Section
      as="section"
      id="hero"
      tone="transparent"
    >
      <Container>
        <motion.div
          className={styles.hero}
          variants={staggerVariants}
          initial="initial"
          animate="animate"
        >
          <div className={styles.main}>
            <HeroContent data={data} />

            <HeroActions
              primaryAction={data.primaryAction}
              secondaryAction={data.secondaryAction}
            />
          </div>

          <HeroVisual image={data.image} />

          <HeroAdvantages
            advantages={data.advantages}
          />
        </motion.div>
      </Container>
    </Section>
  )
}