import type { HeroAction } from '@/entities/hero'

import { ButtonLink } from '@/shared/ui'
import { motion } from 'framer-motion'

import { slideUpVariants } from '@/shared/motion'

import styles from './hero-actions.module.css'

interface HeroActionsProps {
  primaryAction: HeroAction
  secondaryAction?: HeroAction
}

export function HeroActions({
  primaryAction,
  secondaryAction,
}: HeroActionsProps) {
  return (
    <motion.div
      variants={slideUpVariants}
      className={styles.actions}
    >
      <ButtonLink href={primaryAction.href}>
        {primaryAction.label}
      </ButtonLink>

      {secondaryAction ? (
        <ButtonLink href={secondaryAction.href} variant="secondary">
          {secondaryAction.label}
        </ButtonLink>
      ) : null}
    </motion.div>
  )
}