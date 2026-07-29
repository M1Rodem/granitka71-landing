import { forwardRef, memo, useCallback } from 'react'

import type { NavigationItem as NavigationItemModel } from '@/shared/config/navigation'
import { createClassName } from '@/shared/utils'

import styles from './navigation.module.css'

interface NavigationItemProps {
  item: NavigationItemModel
  isActive: boolean
  isHovered: boolean
  onNavigate?: () => void
  onHover?: () => void
  onItemClick?: (id: string) => void
}

export const NavigationItem = memo(
  forwardRef<HTMLAnchorElement, NavigationItemProps>(function NavigationItem(
    { item, isActive, onNavigate, onHover, onItemClick },
    ref,
  ) {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const id = item.href.replace('#', '')
        onItemClick?.(id)
        onNavigate?.()
      },
      [item.href, onItemClick, onNavigate],
    )

    return (
      <li className={styles.item} onMouseEnter={onHover} data-item-id={item.id}>
        <a
          ref={ref}
          href={item.href}
          className={createClassName(styles.link, isActive && styles.linkActive)}
          aria-current={isActive ? 'page' : undefined}
          onClick={handleClick}
        >
          <span className={styles.label}>{item.label}</span>
        </a>
      </li>
    )
  }),
)

NavigationItem.displayName = 'NavigationItem'