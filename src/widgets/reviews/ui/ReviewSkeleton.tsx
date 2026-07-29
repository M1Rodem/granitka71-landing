import { Container, Section } from '@/shared/ui'

import styles from './reviews-skeleton.module.css'

export function ReviewSkeleton() {
  return (
    <Section
      id="reviews"
      tone="surface"
    >
      <Container>
        <div className={styles.section}>
          <div className={styles.header}>
            <div className={styles.eyebrow} />
            <div className={styles.title} />
            <div className={styles.description} />
          </div>

          <div className={styles.grid}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={styles.card}
              >
                <div className={styles.image} />

                <div className={styles.content}>
                  <div className={styles.name} />
                  <div className={styles.subtitle} />

                  <div className={styles.text} />
                  <div className={styles.textShort} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cta} />
        </div>
      </Container>
    </Section>
  )
}