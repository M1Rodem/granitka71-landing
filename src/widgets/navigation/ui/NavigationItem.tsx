import { forwardRef } from 'react'

import type { NavigationItem as NavigationItemModel } from '@/shared/config/navigation'

import styles from './navigation.module.css'

interface NavigationItemProps {
  item: NavigationItemModel
  currentHref?: string
  onNavigate?: () => void
  onHover?: () => void
}

export const NavigationItem = forwardRef<
  HTMLLIElement,
  NavigationItemProps
>(function NavigationItem(
  {
    item,
    currentHref,
    onNavigate,
    onHover,
  },
  ref,
) {
  const isActive = currentHref === item.href

  return (
    <li
      ref={ref}
      className={styles.item}
      onMouseEnter={onHover}
    >
      <a
        href={item.href}
        className={styles.link}
        aria-current={isActive ? 'page' : undefined}
        onClick={onNavigate}
      >
        <span
          className={`${styles.label} ${
            isActive ? styles.labelActive : ''
          }`}
        >
          {item.label}
        </span>
      </a>
    </li>
  )
})

NavigationItem.displayName = 'NavigationItem'