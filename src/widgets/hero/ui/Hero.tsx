import { motion } from 'framer-motion'

import { useHero } from '@/shared/hooks'
import { staggerVariants } from '@/shared/motion'
import { Container, Section, Text } from '@/shared/ui'

import { HeroActions } from './HeroActions'
import { HeroAdvantages } from './HeroAdvantages'
import { HeroContent } from './HeroContent'
import { HeroVisual } from './HeroVisual'

import styles from './hero.module.css'

export function Hero() {
  const { data, isLoading, error } = useHero()

  if (isLoading) {
    return (
      <Section id="hero" tone="background">
        <Container>
          <div className={styles.hero}>
            <div className={styles.main}>
              <div className={styles.content}>
                <div className={styles.skeleton} />
                <div className={styles.skeleton} style={{ width: '80%' }} />
                <div className={styles.skeleton} style={{ width: '60%' }} />
              </div>
            </div>
            <div className={styles.visual}>
              <div className={styles.skeletonVisual} />
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  if (error || !data) {
    return (
      <Section id="hero" tone="background">
        <Container>
          <div className={styles.hero}>
            <div className={styles.main}>
              <div className={styles.content}>
                <Text tone="muted">
                  Не удалось загрузить информацию. Пожалуйста, обновите страницу.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section id="hero" tone="background">
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

          <HeroVisual />

          <HeroAdvantages
            advantages={data.advantages}
          />
        </motion.div>
      </Container>
    </Section>
  )
}