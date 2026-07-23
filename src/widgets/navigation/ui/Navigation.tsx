import { createClassName } from '@/shared/utils'
import { useNavigationPill } from '../hooks/useNavigationPill'
import { NavigationItem } from './NavigationItem'
import type { NavigationItem as NavigationItemModel } from '@/shared/config/navigation'
import styles from './navigation.module.css'

type NavigationOrientation = 'horizontal' | 'vertical'

interface NavigationProps {
  ariaLabel?: string
  className?: string
  currentHref?: string
  items: NavigationItemModel[]
  onNavigate?: () => void
  orientation?: NavigationOrientation
  onHoverChange?: (id: string | null) => void
  hoveredId?: string | null
}

export function Navigation({
  ariaLabel = 'Основная навигация',
  className,
  currentHref,
  items,
  onNavigate,
  orientation = 'horizontal',
  onHoverChange,
  hoveredId = null,
}: NavigationProps) {
  const {
    listRef,
    pillRef,
    glowRef,
    shineRef,
    pillStyle,
    activeId,
    activeHover,
    handleHover,
    handleLeave,
    handleMouseMove,
    setItemRef,
  } = useNavigationPill({ items, currentHref, onHoverChange, hoveredId })

  return (
    <nav
      aria-label={ariaLabel}
      className={createClassName(
        styles.navigation,
        styles[`orientation-${orientation}`],
        className,
      )}
    >
      <div
        className={styles.wrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
      >
        <ul ref={listRef} className={styles.list}>
          {items.map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              isHovered={activeHover === item.id}
              onNavigate={onNavigate}
              onHover={() => handleHover(item.id)}
              ref={setItemRef(item.id)}
            />
          ))}
        </ul>

        <div
          ref={pillRef}
          className={styles.glassPill}
          style={pillStyle}
        >
          <div ref={glowRef} className={styles.liquidGlow} />
          <div ref={shineRef} className={styles.liquidShine} />
        </div>
      </div>
    </nav>
  )
}