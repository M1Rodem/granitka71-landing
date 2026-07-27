import { useState, useCallback, useRef, useEffect } from 'react'

import type { GalleryItem } from '@/entities/gallery'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { slideUpVariants } from '@/shared/motion'

import { GallerySlide } from './GallerySlide'
import { GalleryLightbox } from './GalleryLightbox'

import styles from './gallery-carousel.module.css'

interface GalleryCarouselProps {
  items: GalleryItem[]
}

export function GalleryCarousel({ items }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const viewportRef = useRef<HTMLDivElement>(null)
  const [slideWidth, setSlideWidth] = useState(0)
  const [slideOffset, setSlideOffset] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  /* ---------- responsive dimensions ---------- */
  useEffect(() => {
    const update = () => {
      if (!viewportRef.current) return
      const w = viewportRef.current.offsetWidth

      const mobile = w <= 640
      setIsMobile(mobile)

      let sw: number
      let offset: number

      if (mobile) {
        sw = w * 0.84
        offset = sw - 16
      } else if (w <= 1024) {
        sw = w * 0.66
        offset = sw + w * 0.016
      } else {
        sw = w * 0.50
        offset = sw + w * 0.022
      }

      setSlideWidth(sw)
      setSlideOffset(offset)
    }

    update()
    const ro = new ResizeObserver(update)
    if (viewportRef.current) ro.observe(viewportRef.current)
    return () => ro.disconnect()
  }, [])

  /* ---------- navigation ---------- */
  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + items.length) % items.length)
  }, [items.length])

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % items.length)
  }, [items.length])

  /* ---------- drag ---------- */
  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number } }) => {
      const threshold = 50
      if (info.offset.x > threshold) prev()
      else if (info.offset.x < -threshold) next()
    },
    [prev, next],
  )

  /* ---------- lightbox ---------- */
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + items.length) % items.length : null,
    )
  }, [items.length])

  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % items.length : null,
    )
  }, [items.length])

  /* ---------- guards ---------- */
  if (items.length === 0) return null

  const single = items.length === 1

  const prevIdx = (currentIndex - 1 + items.length) % items.length
  const nextIdx = (currentIndex + 1) % items.length
  const prevPrevIdx = (currentIndex - 2 + items.length) % items.length
  const nextNextIdx = (currentIndex + 2) % items.length

  const visibleIndices = Array.from(
    new Set([prevPrevIdx, prevIdx, currentIndex, nextIdx, nextNextIdx]),
  )

  /* ---------- Физика позиций ---------- */
  const getStyle = (idx: number) => {
    if (idx === currentIndex) {
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        zIndex: 3,
      }
    }

    if (idx === prevIdx) {
      return {
        x: -slideOffset,
        scale: isMobile ? 0.92 : 0.82,
        opacity: isMobile ? 0.4 : 0.72,
        zIndex: 2,
      }
    }

    if (idx === nextIdx) {
      return {
        x: slideOffset,
        scale: isMobile ? 0.92 : 0.82,
        opacity: isMobile ? 0.4 : 0.72,
        zIndex: 2,
      }
    }

    const isLeft =
      (currentIndex - idx + items.length) % items.length <= items.length / 2

    return {
      x: isLeft ? -slideOffset * 2 : slideOffset * 2,
      scale: 0.7,
      opacity: 0,
      zIndex: 1,
    }
  }

  // ВАЖНО: У каждой оси должен быть свой уникальный объект transition!
  const transition = {
    x: { type: 'spring' as const, stiffness: 300, damping: 30, mass: 0.8 },
    scale: { type: 'spring' as const, stiffness: 300, damping: 30, mass: 0.8 },
    opacity: { duration: 0.4, ease: [0.2, 0, 0, 1] as const },
    zIndex: { duration: 0 },
  }

  /* ---------- render ---------- */
  return (
    <>
      <motion.div
        className={styles.carousel}
        variants={slideUpVariants}
        style={
          {
            '--slide-half': `${slideWidth / 2}px`,
          } as React.CSSProperties
        }
      >
        <motion.div
          ref={viewportRef}
          className={styles.viewport}
          drag={single ? false : 'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {visibleIndices.map((idx) => {
            const item = items[idx]

            return (
              <motion.div
                key={item.id}
                className={styles.slideWrapper}
                style={{
                  width: slideWidth || '50%',
                  marginLeft: slideWidth ? -slideWidth / 2 : '-25%',
                }}
                initial={getStyle(idx)}
                animate={getStyle(idx)}
                transition={transition}
              >
                <GallerySlide
                  item={item}
                  onClick={() => openLightbox(idx)}
                  isCurrent={idx === currentIndex}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* ----- arrows ----- */}
        {!single && (
          <>
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={prev}
              aria-label="Предыдущая работа"
              tabIndex={0}
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>

            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={next}
              aria-label="Следующая работа"
              tabIndex={0}
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </>
        )}

        {/* ----- dots ----- */}
        {!single && items.length <= 12 && (
          <div className={styles.dots}>
            {items.map((item, i) => (
              <button
                key={item.id}
                className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Перейти к ${i + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* ----- lightbox ----- */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          item={items[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
          currentIndex={lightboxIndex}
          total={items.length}
        />
      )}
    </>
  )
}