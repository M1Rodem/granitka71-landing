import { motion } from 'framer-motion'

import { useServices } from '@/shared/hooks'
import { staggerVariants } from '@/shared/motion'
import { Container, Section, Text } from '@/shared/ui'

import { ServicesCTA } from './ServicesCTA'
import { ServicesGrid } from './ServicesGrid'
import { ServicesHeader } from './ServicesHeader'

import styles from './services.module.css'

export function Services() {
  const { data, isLoading, error } = useServices()

  if (isLoading) {
    return (
      <Section id="services" tone="background">
        <Container>
          <div className={styles.services}>
            <div className={styles.skeleton} />
            <div className={styles.skeletonGrid} />
          </div>
        </Container>
      </Section>
    )
  }

  if (error || !data) {
    return (
      <Section id="services" tone="background">
        <Container>
          <div className={styles.services}>
            <Text tone="muted">
              Не удалось загрузить информацию. Пожалуйста, обновите страницу.
            </Text>
          </div>
        </Container>
      </Section>
    )
  }

  const hero = data.services.find((service) => service.variant === 'hero')
  const primary = data.services.filter((service) => service.variant === 'primary')
  const compact = data.services.filter((service) => service.variant === 'compact')

  if (!hero) {
    return null
  }

  return (
    <Section id="services" tone="background">
      <Container>
        <motion.div
          className={styles.services}
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <ServicesHeader
            className={styles.header}
            eyebrow={data.header.eyebrow}
            title={data.header.title}
            description={data.header.description}
          />

          <ServicesGrid
            hero={hero}
            primary={primary}
            compact={compact}
          />

          <ServicesCTA
            title={data.cta.title}
            description={data.cta.description}
            phone={data.cta.phone}
            phoneLabel={data.cta.phoneLabel}
            buttonLabel={data.cta.buttonLabel}
            buttonHref={data.cta.buttonHref}
          />
        </motion.div>
      </Container>
    </Section>
  )
}