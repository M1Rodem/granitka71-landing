import { motion } from 'framer-motion'

import { slideUpVariants } from '@/shared/motion'
import {
  ButtonLink,
  Heading,
  Surface,
  Text,
} from '@/shared/ui'

import styles from './gallery-cta.module.css'

interface GalleryCTAProps {
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
}

export function GalleryCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: GalleryCTAProps) {
  return (
    <motion.div variants={slideUpVariants}>
      <Surface className={styles.card}>
        <div className={styles.content}>
            <Heading
                level={3}
                size="5"
                className={styles.title}
            >
                {title}
            </Heading>

            <Text
                tone="muted"
                className={styles.description}
            >
                {description}
            </Text>

            <ButtonLink href={buttonHref}>
                {buttonLabel}
            </ButtonLink>
        </div>
      </Surface>
    </motion.div>
  )
}