import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { APP_NAME } from '@/shared/constants'
import {
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

const mobileMenuVariants: Variants = {
  initial: {
    opacity: 0,
    scaleY: 0.9,
    y: -16,
    filter: 'blur(10px)',
    transformOrigin: 'top center',
  },

  animate: {
    opacity: 1,
    scaleY: 1,
    y: 0,
    filter: 'blur(0px)',
    transformOrigin: 'top center',
    transition: motionTransitions.emphasis,
  },

  exit: {
    opacity: 0,
    scaleY: 0.9,
    y: -12,
    filter: 'blur(8px)',
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
  const headerRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(getCurrentHash)
  const [headerHeight, setHeaderHeight] = useState(0)

  // Обновляем высоту хедера
  const updateHeaderHeight = () => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    // Определяем высоту хедера
    updateHeaderHeight()

    handleScroll()
    handleHashChange()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('resize', updateHeaderHeight)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  // Блокировка скролла при открытом меню
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

    // Обновляем высоту хедера при открытии меню (на случай если изменилась)
    updateHeaderHeight()

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

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
    // Обновляем высоту после открытия/закрытия
    setTimeout(updateHeaderHeight, 100)
  }

  return (
    <>
      <header ref={headerRef} className={styles.header}>
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
                  onClick={toggleMenu}
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
      </header>

      {/* Мобильное меню вне хедера */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileLayer}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={overlayVariants}
            style={{
              // Динамический отступ сверху, чтобы меню не перекрывало хедер
              paddingTop: `calc(${headerHeight}px + 16px)`,
            }}
          >
            {/* Оверлей */}
            <button
              type="button"
              className={styles.overlay}
              aria-label="Закрыть мобильное меню"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Контейнер меню */}
            <motion.div
              className={styles.mobileMenuWrap}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <Surface
                as="aside"
                className={styles.mobileMenu}
                padding="md"
                tone="glass"
              >
                {/* Заголовок меню */}
                <div className={styles.mobileMenuHeader}>
                  <span className={styles.mobileTitle}>Навигация</span>

                  <button
                    type="button"
                    className={styles.closeButton}
                    aria-label="Закрыть меню"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className={styles.closeLine} />
                    <span className={styles.closeLine} />
                  </button>
                </div>

                {/* Навигация */}
                <Navigation
                  ariaLabel="Мобильная навигация"
                  className={styles.mobileNavigation}
                  currentHref={currentHash}
                  items={headerNavigationItems}
                  orientation="vertical"
                  onNavigate={handleNavigate}
                />

                {/* Кнопка вызова - убрал fullWidth */}
                <Button variant="primary" onClick={handleCall}>
                  {headerCtaLabel}
                </Button>
              </Surface>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}