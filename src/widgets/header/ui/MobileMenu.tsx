import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import type { NavigationItem } from '@/shared/config/navigation'
import { Button, Container, Surface } from '@/shared/ui'
import { Navigation } from '@/widgets/navigation'

import styles from './mobile-menu.module.css'

interface MobileMenuProps {
  items: NavigationItem[]
  currentHash: string
  ctaLabel: string
  onCtaClick: () => void
  onNavigate: () => void
  onClose: () => void
  headerHeight: number
  onItemClick?: (id: string) => void
}

export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  function MobileMenu(
    {
      items,
      currentHash,
      ctaLabel,
      onCtaClick,
      onNavigate,
      headerHeight,
      onItemClick,
    },
    ref,
  ) {
    return (
      <motion.div
        ref={ref}
        className={styles.mobileLayer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          paddingTop: `${headerHeight + 16}px`,
        }}
      >
        <Container className={styles.mobileMenuWrap}>
          <Surface
            as="aside"
            className={styles.mobileMenu}
            padding="lg"
            tone="glass"
          >
            <Navigation
              ariaLabel="Мобильная навигация"
              className={styles.mobileNavigation}
              currentHref={currentHash}
              items={items}
              orientation="vertical"
              onNavigate={onNavigate}
              onItemClick={onItemClick}
            />

            <Button
              variant="primary"
              onClick={onCtaClick}
              className={styles.mobileCta}
              size="lg"
            >
              {ctaLabel}
            </Button>
          </Surface>
        </Container>
      </motion.div>
    )
  },
)

MobileMenu.displayName = 'MobileMenu'