import type { ContactItem } from '@/entities/contact'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'

import { fadeInVariants } from '@/shared/motion'
import { ButtonLink, Surface, Text } from '@/shared/ui'

import styles from './contact-card.module.css'

interface ContactCardProps {
  contact: ContactItem
}

const icons = {
  phone: Phone,
  email: Mail,
  telegram: Send,
  max: MessageCircle,
  website: ArrowUpRight,
  address: MapPin,
}

export function ContactCard({ contact }: ContactCardProps) {
  const Icon = icons[contact.type]

  const isExternal =
    contact.type === 'telegram' ||
    contact.type === 'max' ||
    contact.type === 'website'

  return (
    <motion.div variants={fadeInVariants}>
      <Surface className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <Icon
              size={24}
              className={styles.icon}
            />
          </div>

          <Text
            weight="semibold"
            className={styles.title}
          >
            {contact.title}
          </Text>
        </div>

        <Text className={styles.value}>
          {contact.value}
        </Text>

        <ButtonLink
          href={contact.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={styles.button}
        >
          {contact.buttonLabel}
        </ButtonLink>
      </Surface>
    </motion.div>
  )
}