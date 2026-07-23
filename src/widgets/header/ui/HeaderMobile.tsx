import { forwardRef } from 'react'

import { BurgerButton } from './BurgerButton'

import styles from './header.module.css'

interface HeaderMobileProps {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export const HeaderMobile = forwardRef<HTMLDivElement, HeaderMobileProps>(
  function HeaderMobile({ isMenuOpen, onToggleMenu }, ref) {
    return (
      <div ref={ref} className={styles.mobile}>
        <BurgerButton isOpen={isMenuOpen} onToggle={onToggleMenu} />
      </div>
    )
  },
)

HeaderMobile.displayName = 'HeaderMobile'