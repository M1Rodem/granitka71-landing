import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { APP_NAME } from '@/shared/constants'
import {
  motionTokenValues,
  motionTransitions,
  scaleInVariants,
  slideUpVariants,
} from '@/shared/motion'
import { Button, Container, Surface } from '@/shared/ui'
import { createClassName } from '@/shared/utils'
import { Navigation } from '@/widgets/navigation'

import {
  headerCtaLabel,
  headerNavigationItems,
  headerPhoneHref,
} from '../model/navigation'
import styles from './header.module.css'

const overlayVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: motionTransitions.default,
  },
  exit: {
    opacity: 0,
    transition: motionTransitions.quick,
  },
}

const mobileMenuVariants = {
  initial: {
    opacity: 0,
    y: motionTokenValues.offset.md,
    scale: motionTokenValues.scale.subtle,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: motionTokenValues.scale.default,
    transition: motionTransitions.emphasis,
  },
  exit: {
    opacity: 0,
    y: motionTokenValues.offset.sm,
    scale: motionTokenValues.scale.subtle,
    transition: motionTransitions.quick,
  },
}

function getCurrentHash() {
  if (typeof window === 'undefined') {
    return ''
  }

  return window.location.hash
}

export function Header() {
  const prefersReducedMotion = useReducedMotion()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(getCurrentHash)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    handleScroll()
    handleHashChange()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  const handleNavigate = () => {
    setCurrentHash(window.location.hash)
    setIsMenuOpen(false)
  }

  const handleCall = () => {
    window.location.href = headerPhoneHref
  }

  return (
    <header className={styles.header}>
      <Container>
        <motion.div
          animate="animate"
          className={styles.motionFrame}
          initial="initial"
          variants={prefersReducedMotion ? scaleInVariants : slideUpVariants}
        >
          <Surface
            className={createClassName(
              styles.shell,
              isScrolled ? styles.shellScrolled : styles.shellTop,
            )}
            padding="sm"
            tone={isScrolled ? 'default' : 'glass'}
          >
            <div className={styles.row}>
              <a className={styles.logo} href="/">
                <span className={styles.logoMark}>{APP_NAME}</span>
                <span className={styles.logoCaption}>Landing Shell</span>
              </a>

              <div className={styles.desktopNavigation}>
                <Navigation
                  currentHref={currentHash}
                  items={headerNavigationItems}
                />
              </div>

              <div className={styles.desktopActions}>
                <Button onClick={handleCall} size="sm" variant="primary">
                  {headerCtaLabel}
                </Button>
              </div>

              <button
                aria-controls="mobile-navigation"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                className={styles.burger}
                onClick={() => setIsMenuOpen((current) => !current)}
                type="button"
              >
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
              </button>
            </div>
          </Surface>
        </motion.div>
      </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            animate="animate"
            className={styles.mobileLayer}
            exit="exit"
            initial="initial"
            variants={overlayVariants}
          >
            <button
              aria-label="Закрыть мобильное меню"
              className={styles.overlay}
              onClick={() => setIsMenuOpen(false)}
              type="button"
            />
            <Container>
              <motion.div
                animate="animate"
                className={styles.mobileMenuWrap}
                exit="exit"
                initial="initial"
                variants={mobileMenuVariants}
              >
                <Surface
                  as="aside"
                  className={styles.mobileMenu}
                  padding="md"
                  tone="glass"
                >
                  <div className={styles.mobileMenuHeader}>
                    <span className={styles.mobileTitle}>Навигация</span>
                    <button
                      aria-label="Закрыть меню"
                      className={styles.closeButton}
                      onClick={() => setIsMenuOpen(false)}
                      type="button"
                    >
                      <span className={styles.closeLine} />
                      <span className={styles.closeLine} />
                    </button>
                  </div>

                  <Navigation
                    ariaLabel="Мобильная навигация"
                    className={styles.mobileNavigation}
                    currentHref={currentHash}
                    items={headerNavigationItems}
                    onNavigate={handleNavigate}
                    orientation="vertical"
                  />

                  <Button onClick={handleCall} variant="primary">
                    {headerCtaLabel}
                  </Button>
                </Surface>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
