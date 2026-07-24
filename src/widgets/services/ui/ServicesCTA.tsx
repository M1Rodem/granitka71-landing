import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

import { slideUpVariants } from '@/shared/motion'
import {
  ButtonLink,
  Heading,
  Surface,
  Text,
} from '@/shared/ui'

import styles from './services-cta.module.css'

interface ServicesCTAProps {
  title: string
  description: string
  phone: string
  phoneLabel: string
  buttonLabel: string
  buttonHref: string
}

export function ServicesCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: ServicesCTAProps) {
  return (
    <motion.div variants={slideUpVariants}>
      <Surface className={styles.cta}>
        <div className={styles.content}>
          <Heading level={2} size="3">
            {title}
          </Heading>

          <Text size="lg" tone="muted">
            {description}
          </Text>
        </div>

        <div className={styles.actions}>
          <ButtonLink href={buttonHref}>
            <Phone size={18} />
            {buttonLabel}
          </ButtonLink>
        </div>
      </Surface>
    </motion.div>
  )
}