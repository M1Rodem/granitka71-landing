import { createClassName } from '@/shared/utils'
import type { NavigationItem } from '@/shared/config/navigation'

import styles from './navigation.module.css'

type NavigationOrientation = 'horizontal' | 'vertical'

interface NavigationProps {
  ariaLabel?: string
  className?: string
  currentHref?: string
  items: NavigationItem[]
  onNavigate?: () => void
  orientation?: NavigationOrientation
}

export function Navigation({
  ariaLabel = 'Основная навигация',
  className,
  currentHref,
  items,
  onNavigate,
  orientation = 'horizontal',
}: NavigationProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className={createClassName(
        styles.navigation,
        styles[`orientation-${orientation}`],
        className,
      )}
    >
      <ul className={styles.list}>
        {items.map((item) => {
          const isActive = currentHref === item.href

          return (
            <li className={styles.item} key={item.id}>
              <a
                aria-current={isActive ? 'location' : undefined}
                className={styles.link}
                data-active={isActive}
                href={item.href}
                onClick={onNavigate}
              >
                <span className={styles.label}>{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
