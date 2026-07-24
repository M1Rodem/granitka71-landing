import type { Service } from '@/entities/service'

import { ArrowRight } from 'lucide-react'
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

import styles from './services-primary-card.module.css'

interface ServicesPrimaryCardProps {
  service: Service
}

export function ServicesPrimaryCard({
  service,
}: ServicesPrimaryCardProps) {
  const pavingImage = getImage('paving')

  return (
    <motion.div variants={slideUpVariants}>
      <Surface className={styles.card}>
        <div className={styles.image}>
          <Image
            image={pavingImage}
            fit="cover"
            radius="lg"
          />
        </div>

        <div className={styles.content}>
          <Heading
            level={3}
            size="4"
            className={styles.title}
          >
            {service.title}
          </Heading>

          <Text
            size="sm"
            tone="muted"
            className={styles.description}
          >
            {service.shortDescription}
          </Text>

          <div className={styles.footer}>
            <ButtonLink
              href="#contacts"
              variant="secondary"
              className={styles.button}
            >
              Подробнее об услуге
              <ArrowRight size={16} className={styles.arrow} />
            </ButtonLink>
          </div>
        </div>
      </Surface>
    </motion.div>
  )
}