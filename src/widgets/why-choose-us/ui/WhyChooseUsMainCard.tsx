import type { WhyChooseUsMainCard as WhyChooseUsMainCardType } from '@/entities/why-choose-us'

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

import styles from './why-choose-us-main-card.module.css'

interface WhyChooseUsMainCardProps {
  card: WhyChooseUsMainCardType
}

export function WhyChooseUsMainCard({
  card,
}: WhyChooseUsMainCardProps) {
  return (
    <motion.div variants={slideUpVariants}>
      <Surface className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <WhyChooseUsIcon
                icon={card.icon}
                size={24}
              />
            </div>

            <Heading
              level={3}
              size="2"
              className={styles.title}
            >
              {card.title}
            </Heading>
          </div>

          <Text
            size="lg"
            tone="muted"
            className={styles.description}
          >
            {card.description}
          </Text>

          <div className={styles.footer}>
            <ButtonLink
              href={card.action.href}
              className={styles.button}
            >
              {card.action.label}
              <ArrowRight
                size={18}
                className={styles.arrow}
              />
            </ButtonLink>
          </div>
        </div>
      </Surface>
    </motion.div>
  )
}