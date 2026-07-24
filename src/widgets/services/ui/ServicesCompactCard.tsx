import type { Service } from '@/entities/service'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { slideUpVariants } from '@/shared/motion'
import {
  ButtonLink,
  Heading,
  Surface,
  Text,
} from '@/shared/ui'

import { ServiceIcon } from './serviceIcons'
import styles from './services-compact-card.module.css'

interface ServicesCompactCardProps {
  service: Service
}

export function ServicesCompactCard({
  service,
}: ServicesCompactCardProps) {
  return (
    <motion.div variants={slideUpVariants}>
      <Surface className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <ServiceIcon title={service.title} size={20} />
            </div>
            <Heading
              level={3}
              size="5"
              className={styles.title}
            >
              {service.title}
            </Heading>
          </div>

          <Text
            size="sm"
            tone="muted"
            className={styles.description}
          >
            {service.shortDescription}
          </Text>
        </div>

        <ButtonLink
          href="#contacts"
          variant="secondary"
          className={styles.button}
        >
          Подробнее
          <ArrowRight size={16} className={styles.arrow} />
        </ButtonLink>
      </Surface>
    </motion.div>
  )
}