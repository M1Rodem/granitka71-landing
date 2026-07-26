import type { WhyChooseUsCard as WhyChooseUsCardType } from '@/entities/why-choose-us'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { slideUpVariants } from '@/shared/motion'
import {
  ButtonLink,
  Heading,
  Surface,
  Text,
} from '@/shared/ui'

import { WhyChooseUsIcon } from './WhyChooseUsIcon'

import styles from './WhyChooseUsCard.module.css'

interface WhyChooseUsCardProps {
  card: WhyChooseUsCardType
}

export function WhyChooseUsCard({
  card,
}: WhyChooseUsCardProps) {
  return (
    <motion.div variants={slideUpVariants}>
      <Surface className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <WhyChooseUsIcon
                icon={card.icon}
                size={20}
              />
            </div>

            <Heading
              level={3}
              size="5"
              className={styles.title}
            >
              {card.title}
            </Heading>
          </div>

          <Text
            tone="muted"
            className={styles.description}
          >
            {card.description}
          </Text>
        </div>

        <ButtonLink
          href={card.action.href}
          variant="secondary"
          className={styles.button}
        >
          {card.action.label}
          <ArrowRight
            size={16}
            className={styles.arrow}
          />
        </ButtonLink>
      </Surface>
    </motion.div>
  )
}