import type { HeroAction } from '@/entities/hero'

import { Button } from '@/shared/ui'
import { motion } from 'framer-motion'

import { slideUpVariants } from '@/shared/motion'
import styles from './heroactions.module.css'

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
        <Button>
        {primaryAction.label}
        </Button>

        {secondaryAction ? (
        <Button variant="secondary">
            {secondaryAction.label}
        </Button>
        ) : null}
    </motion.div>
    )
}