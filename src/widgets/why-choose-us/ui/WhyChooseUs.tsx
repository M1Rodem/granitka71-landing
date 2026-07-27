import { motion } from 'framer-motion'

import { useWhyChooseUsSection } from '../model/useWhyChooseUsSection'

import { staggerVariants } from '@/shared/motion'
import { Container, Section, Text } from '@/shared/ui'

import { WhyChooseUsCard } from './WhyChooseUsCard'
import { WhyChooseUsHeader } from './WhyChooseUsHeader'
import { WhyChooseUsMainCard } from './WhyChooseUsMainCard'

import styles from './why-choose-us.module.css'

export function WhyChooseUs() {
  const { data, isLoading, error } = useWhyChooseUsSection()

  if (isLoading) {
    return (
      <Section id="why-choose-us" tone="surface">
        <Container>
          <div className={styles.section}>
            <div className={styles.skeletonHeader} />
            <div className={styles.skeletonMainCard} />
            <div className={styles.skeletonGrid} />
          </div>
        </Container>
      </Section>
    )
  }

  if (error || !data) {
    return (
      <Section id="why-choose-us" tone="surface">
        <Container>
          <div className={styles.section}>
            <Text tone="muted">
              Не удалось загрузить информацию. Пожалуйста, обновите страницу.
            </Text>
          </div>
        </Container>
      </Section>
    )
  }

  const cards = data.cards
    .filter((card) => card.isVisible)
    .sort((a, b) => a.order - b.order)

  return (
    <Section
      id="why-choose-us"
      tone="surface"
    >
      <Container>
        <motion.div
          className={styles.section}
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <WhyChooseUsHeader
            className={styles.header}
            eyebrow={data.header.eyebrow}
            title={data.header.title}
            description={data.header.description}
          />

          <WhyChooseUsMainCard
            card={data.mainCard}
          />

          <div className={styles.grid}>
            {cards.map((card) => (
              <WhyChooseUsCard
                key={card.id}
                card={card}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}