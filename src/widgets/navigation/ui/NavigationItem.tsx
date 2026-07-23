import { forwardRef, memo } from 'react'

import type { NavigationItem as NavigationItemModel } from '@/shared/config/navigation'
import { createClassName } from '@/shared/utils'

import styles from './navigation.module.css'

interface NavigationItemProps {
  item: NavigationItemModel
  isActive: boolean
  isHovered: boolean
  onNavigate?: () => void
  onHover?: () => void
}

export const NavigationItem = memo(
  forwardRef<HTMLAnchorElement, NavigationItemProps>(function NavigationItem(
    { item, isActive, onNavigate, onHover },
    ref,
  ) {
    return (
      <li className={styles.item} onMouseEnter={onHover} data-item-id={item.id}>
        <a
          ref={ref}
          href={item.href}
          className={createClassName(styles.link, isActive && styles.linkActive)}
          aria-current={isActive ? 'page' : undefined}
          onClick={onNavigate}
        >
          <span className={styles.label}>{item.label}</span>
        </a>
      </li>
    )
  }),
)

NavigationItem.displayName = 'NavigationItem'