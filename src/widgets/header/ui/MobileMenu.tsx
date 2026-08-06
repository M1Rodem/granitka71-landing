import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { Phone } from 'lucide-react'

import type { NavigationItem } from '@/shared/config/navigation'
import { Container, Surface } from '@/shared/ui'
import { Navigation } from '@/widgets/navigation'

import styles from './mobile-menu.module.css'

interface MobileMenuProps {
  items: NavigationItem[]
  currentHash: string
  ctaLabel: string
  phones: { label: string; href: string }[]
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
      phones,
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
            {/* ОБЕРТКА ДЛЯ ВСЕГО КОНТЕНТА С ОДИНАКОВЫМИ ПАДДИНГАМИ */}
            <div className={styles.mobileContent}>
              <Navigation
                ariaLabel="Мобильная навигация"
                className={styles.mobileNavigation}
                currentHref={currentHash}
                items={items}
                orientation="vertical"
                onNavigate={onNavigate}
                onItemClick={onItemClick}
              />

              <div className={styles.mobileCtaWrapper}>
                <span className={styles.mobileCtaLabel}>Позвонить:</span>
                {phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className={styles.phoneMenuItem}
                  >
                    <Phone size={14} className={styles.phoneMenuItemIcon} />
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>
          </Surface>
        </Container>
      </motion.div>
    )
  },
)

MobileMenu.displayName = 'MobileMenu'