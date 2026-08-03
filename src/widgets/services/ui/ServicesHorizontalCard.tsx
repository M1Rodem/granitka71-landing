import type { Service } from '@/entities/service'

import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'

import { getImage } from '@/shared/lib/image'
import { slideUpVariants } from '@/shared/motion'
import {
  ButtonLink,
  Heading,
  Image,
  Surface,
  Text,
} from '@/shared/ui'

import styles from './services-horizontal-card.module.css'

interface ServicesHorizontalCardProps {
  service: Service
}

export function ServicesHorizontalCard({
  service,
}: ServicesHorizontalCardProps) {
  const monumentImage = getImage('monument')

  return (
    <motion.div variants={slideUpVariants}>
      <Surface className={styles.card}>
        <div className={styles.image}>
          <Image
            image={monumentImage}
            fit="cover"
          />
        </div>

        <div className={styles.content}>
          <Heading
            level={3}
            size="3"
            className={styles.title}
          >
            {service.title}
          </Heading>

          <Text
            tone="muted"
            className={styles.description}
          >
            {service.description}
          </Text>

          {service.advantages && service.advantages.length > 0 && (
            <ul className={styles.advantages}>
              {service.advantages.map((advantage) => (
                <li key={advantage} className={styles.advantage}>
                  <Check size={16} className={styles.checkIcon} />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          )}

          <ButtonLink
            href="#contacts"
            variant="secondary"
            className={styles.button}
          >
            Подробнее об услуге
            <ArrowRight size={18} className={styles.arrow} />
          </ButtonLink>
        </div>
      </Surface>
    </motion.div>
  )
}