import type { Service } from '@/entities/service'

import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'

import { getImage } from '@/shared/lib/image'
import { slideUpVariants } from '@/shared/motion'
import { ButtonLink, Heading, Image, Surface, Text } from '@/shared/ui'

import styles from './services-hero-card.module.css'

interface ServicesHeroCardProps {
  service: Service
}

export function ServicesHeroCard({
  service,
}: ServicesHeroCardProps) {
  const landscapingImage = getImage('Landscaping')

  return (
    <motion.div variants={slideUpVariants}>
      <Surface className={styles.card}>
        <div className={styles.image}>
          <Image
            image={landscapingImage}
            fit="cover"
          />
        </div>

        <div className={styles.overlay}>
          <div className={styles.content}>
            <Heading level={3} size="2" className={styles.title}>
              {service.title}
            </Heading>

            {/* Обернули текст в div для более точного контроля раскрытия */}
            <div className={styles.descriptionWrapper}>
              <Text size="lg" tone="muted" className={styles.description}>
                {service.description}
              </Text>
            </div>

            {service.advantages && service.advantages.length > 0 && (
              <ul className={styles.advantages}>
                {service.advantages.map((advantage) => (
                  <li key={advantage} className={styles.advantageItem}>
                    <Check size={15} strokeWidth={2.5} className={styles.checkIcon} />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            )}

            <ButtonLink href="#contacts" className={styles.ctaButton}>
              Получить консультацию
              <ArrowRight size={16} className={styles.arrowIcon} />
            </ButtonLink>
          </div>
        </div>
      </Surface>
    </motion.div>
  )
}