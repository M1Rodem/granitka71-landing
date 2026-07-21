import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

import type { NavigationItem as NavigationItemModel } from '@/shared/config/navigation'
import { createClassName } from '@/shared/utils'

import { NavigationItem } from './NavigationItem'

import styles from './navigation.module.css'

type NavigationOrientation = 'horizontal' | 'vertical'

interface NavigationProps {
  ariaLabel?: string
  className?: string
  currentHref?: string
  items: NavigationItemModel[]
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
  const wrapperRef = useRef<HTMLDivElement>(null)

  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({})

  const [hoverStyle, setHoverStyle] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    visible: false,
  })

  const updateHover = (id: string) => {
    const wrapper = wrapperRef.current
    const item = itemRefs.current[id]

    if (!wrapper || !item) return

    const wrapperRect = wrapper.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()

    setHoverStyle({
      x: itemRect.left - wrapperRect.left,
      y: itemRect.top - wrapperRect.top,
      width: itemRect.width,
      height: itemRect.height,
      visible: true,
    })
  }

  const hideHover = () => {
    setHoverStyle((prev) => ({
      ...prev,
      visible: false,
    }))
  }
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
        ref={wrapperRef}
        className={styles.wrapper}
        onMouseLeave={hideHover}
      >
        <motion.div
          className={styles.hoverPill}
          animate={{
            x: hoverStyle.x,
            y: hoverStyle.y,
            width: hoverStyle.width,
            height: hoverStyle.height,
            opacity: hoverStyle.visible ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 550,
            damping: 36,
            mass: 0.55,
          }}
        />

        <ul className={styles.list}>
          {items.map((item) => (
            <NavigationItem
              key={item.id}
              ref={(el: HTMLLIElement | null) => {
                itemRefs.current[item.id] = el
              }}
              item={item}
              currentHref={currentHref}
              onNavigate={onNavigate}
              onHover={() => updateHover(item.id)}
            />
          ))}
        </ul>
      </div>
    </nav>
  )
}