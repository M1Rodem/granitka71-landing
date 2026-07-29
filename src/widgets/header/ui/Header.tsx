import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

import logo from '@/shared/assets/images/logo/logo.png'
import { Container, Surface } from '@/shared/ui'
import { createClassName } from '@/shared/utils'
import { useActiveSection } from '@/shared/hooks/useActiveSection'
import { useSmoothScroll } from '@/shared/hooks/useSmoothScroll'
import { landingNavigationItems, headerCtaLabel, headerPhoneHref } from '@/shared/config/navigation'

import {
  useBodyScrollLock,
  useEscapeClose,
  useHeaderScroll,
} from '../hooks'

import { HeaderDesktop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'
import { HeaderOverlay } from './HeaderOverlay'
import { MobileMenu } from './MobileMenu'

import styles from './header.module.css'

const sectionIds = landingNavigationItems.map((item) => item.id)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const logoRafRef = useRef<number>(0)

  const isScrolled = useHeaderScroll()
  const prefersReducedMotion = useReducedMotion()
  const activeSection = useActiveSection({ sectionIds })
  const scrollTo = useSmoothScroll()

  useBodyScrollLock(isMenuOpen)
  useEscapeClose(isMenuOpen, () => setIsMenuOpen(false))

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height)
      }
    }

    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLogoMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion) return

    const el = logoRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * 0.35
    const deltaY = (e.clientY - centerY) * 0.35

    cancelAnimationFrame(logoRafRef.current)
    logoRafRef.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    })
  }, [prefersReducedMotion])

  const handleLogoMouseLeave = useCallback(() => {
    const el = logoRef.current
    if (!el) return

    cancelAnimationFrame(logoRafRef.current)
    el.style.transform = 'translate(0, 0)'
  }, [])

  useEffect(() => {
    return () => cancelAnimationFrame(logoRafRef.current)
  }, [])

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const handleNavigate = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const handleCall = useCallback(() => {
    window.location.href = headerPhoneHref
  }, [])

  const handleNavHover = useCallback((id: string | null) => {
    setHoveredNavId(id)
  }, [])

  const handleItemClick = useCallback(
    (id: string) => {
      scrollTo(id)
    },
    [scrollTo],
  )

  const currentHash = `#${activeSection}`

  return (
    <>
      <header
        ref={headerRef}
        className={createClassName(
          styles.header,
          isMenuOpen && styles.menuOpen,
        )}
      >
        <Container>
          <motion.div
            animate="animate"
            className={styles.motionFrame}
            initial="initial"
            variants={
              prefersReducedMotion
                ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
                : {
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0 },
                  }
            }
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 40,
              mass: 0.8,
            }}
          >
            <Surface
              className={createClassName(
                styles.shell,
                isScrolled ? styles.shellScrolled : styles.shellTop,
                isMenuOpen && styles.shellExpanded,
              )}
              padding="sm"
              tone={isScrolled ? 'default' : 'glass'}
            >
              <div className={styles.row}>
                <a
                  ref={logoRef}
                  className={styles.logoWrapper}
                  href="#hero"
                  aria-label="Гранитка71 — На главную"
                  onMouseMove={handleLogoMouseMove}
                  onMouseLeave={handleLogoMouseLeave}
                >
                  <div className={styles.logoGlow} />
                  <div className={styles.logoPulse} />
                  <div className={styles.logoInner}>
                    <img
                      src={logo}
                      alt="Гранитка71"
                      className={styles.logoImage}
                      draggable={false}
                    />
                  </div>
                  <div className={styles.logoShine} />
                </a>

                <HeaderDesktop
                  items={landingNavigationItems}
                  currentHash={currentHash}
                  ctaLabel={headerCtaLabel}
                  onCtaClick={handleCall}
                  onNavigate={handleNavigate}
                  onNavHover={handleNavHover}
                  hoveredNavId={hoveredNavId}
                  onItemClick={handleItemClick}
                />

                <HeaderMobile
                  isMenuOpen={isMenuOpen}
                  onToggleMenu={handleToggleMenu}
                />
              </div>
            </Surface>
          </motion.div>
        </Container>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <HeaderOverlay onClose={handleCloseMenu} />
            <MobileMenu
              items={landingNavigationItems}
              currentHash={currentHash}
              ctaLabel={headerCtaLabel}
              onCtaClick={handleCall}
              onNavigate={handleNavigate}
              onClose={handleCloseMenu}
              headerHeight={headerHeight}
              onItemClick={handleItemClick}
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}