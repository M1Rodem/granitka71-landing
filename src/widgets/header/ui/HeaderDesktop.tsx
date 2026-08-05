import { forwardRef, useState } from 'react'

import type { NavigationItem } from '@/shared/config/navigation'
import { Navigation } from '@/widgets/navigation'

import { PhoneDropdown } from './PhoneDropdown'

import styles from './header.module.css'

interface HeaderDesktopProps {
  items: NavigationItem[]
  currentHash: string
  ctaLabel: string
  phones: { label: string; href: string }[]
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
      phones,
      onNavigate,
      onNavHover,
      hoveredNavId,
      onItemClick,
    },
    ref,
  ) {
    const [isPhoneOpen, setIsPhoneOpen] = useState(false)

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
          <PhoneDropdown
            phones={phones}
            ctaLabel={ctaLabel}
            isOpen={isPhoneOpen}
            onToggle={() => setIsPhoneOpen(!isPhoneOpen)}
            onClose={() => setIsPhoneOpen(false)}
          />
        </div>
      </div>
    )
  },
)

HeaderDesktop.displayName = 'HeaderDesktop'