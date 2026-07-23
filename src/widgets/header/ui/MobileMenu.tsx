import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import type { NavigationItem } from '@/shared/config/navigation'
import { Button, Container, Surface } from '@/shared/ui'
import { Navigation } from '@/widgets/navigation'

import {
  menuContainerVariants,
  mobileMenuItemVariants,
  mobileCtaVariants,
} from '@/shared/motion'

import styles from './mobile-menu.module.css'

interface MobileMenuProps {
  items: NavigationItem[]
  currentHash: string
  ctaLabel: string
  onCtaClick: () => void
  onNavigate: () => void
  onClose: () => void
  headerHeight: number
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
    },
    ref,
  ) {
    return (
      <motion.div
        ref={ref}
        className={styles.mobileLayer}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={menuContainerVariants}
        style={{
          paddingTop: `${headerHeight + 16}px`,
        }}
      >
        <Container className={styles.mobileMenuWrap}>
          <motion.div
            variants={menuContainerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Surface
              as="aside"
              className={styles.mobileMenu}
              padding="lg"
              tone="glass"
            >
              <div className={styles.mobileNavigation}>
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    variants={mobileMenuItemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={styles.navItemWrapper}
                  >
                    <Navigation
                      ariaLabel="Мобильная навигация"
                      className={styles.mobileNavigation}
                      currentHref={currentHash}
                      items={[item]}
                      orientation="vertical"
                      onNavigate={onNavigate}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={mobileCtaVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Button
                  variant="primary"
                  onClick={onCtaClick}
                  className={styles.mobileCta}
                  size="lg"
                >
                  {ctaLabel}
                </Button>
              </motion.div>
            </Surface>
          </motion.div>
        </Container>
      </motion.div>
    )
  },
)

MobileMenu.displayName = 'MobileMenu'