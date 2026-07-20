import { Card, Container, Heading, Section, Text } from '@/shared/ui'

import styles from './landing-section.module.css'

type LandingSectionTone = 'background' | 'surface'
type LandingSectionVariant = 'default' | 'hero'

interface LandingSectionProps {
  description: string
  id: string
  title: string
  tone?: LandingSectionTone
  variant?: LandingSectionVariant
}

export function LandingSection({
  description,
  id,
  title,
  tone = 'background',
  variant = 'default',
}: LandingSectionProps) {
  return (
    <Section
      className={styles.section}
      id={id}
      tone={tone}
    >
      <Container>
        <Card
          className={styles.card}
          padding={variant === 'hero' ? 'lg' : 'md'}
        >
          <div className={styles.content}>
            <Text
              as="span"
              className={styles.eyebrow}
              size="sm"
              tone="accent"
              weight="semibold"
            >
              Placeholder
            </Text>
            <Heading
              level={variant === 'hero' ? 1 : 2}
              size={variant === 'hero' ? '1' : '2'}
            >
              {title}
            </Heading>
            <Text className={styles.description} size="lg" tone="muted">
              {description}
            </Text>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
