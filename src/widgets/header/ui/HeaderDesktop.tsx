import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import type { NavigationItem } from '@/shared/config/navigation'
import { Button } from '@/shared/ui'
import { Navigation } from '@/widgets/navigation'

import styles from './header.module.css'

interface HeaderDesktopProps {
  items: NavigationItem[]
  currentHash: string
  ctaLabel: string
  onCtaClick: () => void
  onNavigate: () => void
  onNavHover: (id: string | null) => void
  hoveredNavId: string | null
  onItemClick?: (id: string) => void
}

export const HeaderDesktop = forwardRef<HTMLDivElement, HeaderDesktopProps>(
  function HeaderDesktop(
    {
      items,
      currentHash,
      ctaLabel,
      onCtaClick,
      onNavigate,
      onNavHover,
      hoveredNavId,
      onItemClick,
    },
    ref,
  ) {
    return (
      <div ref={ref} className={styles.desktop}>
        <div className={styles.desktopNavigation}>
          <Navigation
            currentHref={currentHash}
            items={items}
            onNavigate={onNavigate}
            onHoverChange={onNavHover}
            hoveredId={hoveredNavId}
            onItemClick={onItemClick}
          />
        </div>

        <div className={styles.desktopActions}>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400, damping: 20 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
          >
            <Button
              onClick={onCtaClick}
              size="sm"
              variant="primary"
              className={styles.ctaButton}
            >
              {ctaLabel}
            </Button>
          </motion.div>
        </div>
      </div>
    )
  },
)

HeaderDesktop.displayName = 'HeaderDesktop'