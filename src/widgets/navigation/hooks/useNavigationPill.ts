import { useCallback, useEffect, useRef, useState } from 'react'

import type { NavigationItem } from '@/shared/config/navigation'

interface UseNavigationPillProps {
  items: NavigationItem[]
  currentHref?: string
  onHoverChange?: (id: string | null) => void
  hoveredId?: string | null
}

export function useNavigationPill({
  items,
  currentHref,
  onHoverChange,
  hoveredId = null,
}: UseNavigationPillProps) {
  const listRef = useRef<HTMLUListElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const glowElRef = useRef<HTMLDivElement>(null)
  const shineElRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const mousePos = useRef({ x: 0.5, y: 0.5 })
  const rafRef = useRef<number>(0)
  const resizeRafRef = useRef<number>(0)

  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [pillStyle, setPillStyle] = useState<React.CSSProperties>({ opacity: 0 })
  const [isPillVisible, setIsPillVisible] = useState(false)

  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  // Ищем hero или первый элемент как default
  const defaultId = items.find((item) => item.id === 'hero')?.id || items[0]?.id || null
  const activeId = items.find((item) => item.href === currentHref)?.id || defaultId
  const activeHover = hoveredId || hoveredItem
  const isHovering = activeHover !== null

  const getPillRect = useCallback((itemId: string) => {
    const list = listRef.current
    const link = itemRefs.current[itemId]
    if (!list || !link) return null

    const listRect = list.getBoundingClientRect()
    const linkRect = link.getBoundingClientRect()

    return {
      left: linkRect.left - listRect.left,
      top: linkRect.top - listRect.top,
      width: linkRect.width,
      height: linkRect.height,
      opacity: 1,
    }
  }, [])

  const updatePill = useCallback((itemId: string | null) => {
    if (!itemId) {
      setPillStyle({ opacity: 0 })
      setIsPillVisible(false)
      return
    }
    const rect = getPillRect(itemId)
    setPillStyle(rect || { opacity: 0 })
    setIsPillVisible(true)
  }, [getPillRect])

  const updateLiquid = useCallback(() => {
    const pill = pillRef.current
    if (!pill) return

    const { x, y } = mousePos.current

    const offsetX = (x - 0.5) * 16
    const offsetY = (y - 0.5) * 10
    const scaleX = 1 + (x - 0.5) * 0.15
    const scaleY = 1 + (y - 0.5) * 0.15

    pill.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scaleX}, ${scaleY})`

    const glow = glowElRef.current
    const shine = shineElRef.current
    if (!glow || !shine) return

    glow.style.transform = `translate(${(x - 0.5) * 8}px, ${(y - 0.5) * 6}px)`
    shine.style.transform = `translate(${(1 - x - 0.5) * 6}px, ${(1 - y - 0.5) * 4}px)`
  }, [])

  const resetLiquid = useCallback(() => {
    const pill = pillRef.current
    if (!pill) return

    pill.style.transform = 'translate(0, 0) scale(1, 1)'

    const glow = glowElRef.current
    const shine = shineElRef.current
    if (glow) glow.style.transform = 'translate(0, 0)'
    if (shine) shine.style.transform = 'translate(0, 0)'

    mousePos.current.x = 0.5
    mousePos.current.y = 0.5
  }, [])

  const handleHover = useCallback((id: string) => {
    setHoveredItem(id)
    updatePill(id)
    onHoverChange?.(id)
  }, [updatePill, onHoverChange])

  const handleLeave = useCallback(() => {
    setHoveredItem(null)
    resetLiquid()
    updatePill(activeId)
    onHoverChange?.(null)
  }, [activeId, updatePill, resetLiquid, onHoverChange])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isHovering || prefersReducedMotion) return

    const link = itemRefs.current[activeHover || '']
    if (!link) return

    const rect = link.getBoundingClientRect()
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))

    mousePos.current.x = x
    mousePos.current.y = y

    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(updateLiquid)
  }, [isHovering, activeHover, prefersReducedMotion, updateLiquid])

  const setItemRef = useCallback((id: string) => (el: HTMLAnchorElement | null) => {
    itemRefs.current[id] = el
  }, [])

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current)
      cancelAnimationFrame(resizeRafRef.current)
    }
  }, [])

  useEffect(() => {
    if (!pillRef.current) return
    if (isPillVisible && !prefersReducedMotion) {
      pillRef.current.style.willChange = 'transform, left, top, width, height'
    } else {
      pillRef.current.style.willChange = 'auto'
    }
  }, [isPillVisible, prefersReducedMotion])

  useEffect(() => {
    const wrapper = listRef.current?.parentElement
    if (!wrapper) return

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(resizeRafRef.current)

      resizeRafRef.current = requestAnimationFrame(() => {
        if (activeId) {
          updatePill(isHovering ? activeHover : activeId)
        }
      })
    })

    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [activeId, activeHover, isHovering, updatePill])

  useEffect(() => {
    if (!listRef.current) return

    const sections = items
      .map(i => document.querySelector(i.href))
      .filter((el): el is Element => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible && !isHovering) {
          const id = visible.target.id
          const item = items.find(i => i.href === `#${id}`)
          if (item) {
            updatePill(item.id)
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))

    return () => {
      sections.forEach(s => observer.unobserve(s))
      observer.disconnect()
    }
  }, [items, isHovering, updatePill])

  return {
    listRef,
    pillRef,
    glowRef: glowElRef,
    shineRef: shineElRef,
    pillStyle,
    isHovering,
    activeId,
    activeHover,
    handleHover,
    handleLeave,
    handleMouseMove,
    setItemRef,
  }
}