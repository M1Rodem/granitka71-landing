import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

import type { Review } from '@/entities/review'
import { useReviews } from '@/shared/hooks'
import { Button, Container, Section, Text } from '@/shared/ui'

import { ReviewSkeleton } from './ReviewSkeleton'
import { ReviewsCTA } from './ReviewsCTA'
import { ReviewsGrid } from './ReviewsGrid'
import { ReviewsHeader } from './ReviewsHeader'
import { ReviewModal } from './ReviewModal'
import { ReviewFormModal } from './ReviewFormModal'

import styles from './reviews.module.css'

const DESKTOP_INITIAL = 6
const MOBILE_INITIAL = 3
const LOAD_MORE = 3

export function Reviews() {
  const { data, isLoading, error } = useReviews()
  const [selected, setSelected] = useState<Review | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [count, setCount] = useState(DESKTOP_INITIAL)
  const [, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (mobile && count > MOBILE_INITIAL) {
        setCount(MOBILE_INITIAL)
      } else if (!mobile && count < DESKTOP_INITIAL) {
        setCount(DESKTOP_INITIAL)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [count])

  if (isLoading) return <ReviewSkeleton />
  if (error || !data) {
    return (
      <Section id="reviews" tone="surface">
        <Container>
          <Text tone="muted">Не удалось загрузить отзывы.</Text>
        </Container>
      </Section>
    )
  }

  const reviews = data.reviews.filter((r) => r.isVisible).sort((a, b) => a.order - b.order)
  const visible = reviews.slice(0, count)
  const hasMore = count < reviews.length

  return (
    <>
      <Section id="reviews" tone="surface">
        <Container>
          <div className={styles.section}>
            <ReviewsHeader
              eyebrow={data.header.eyebrow}
              title={data.header.title}
              description={data.header.description}
            />

            <ReviewsGrid reviews={visible} onReviewClick={setSelected} />

            {hasMore && (
              <div className={styles.loadMoreWrapper}>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setCount((p) => Math.min(p + LOAD_MORE, reviews.length))}
                  className={styles.loadMoreButton}
                >
                  Показать ещё
                  <span className={styles.loadMoreCount}>{reviews.length - count}</span>
                </Button>
              </div>
            )}

            <ReviewsCTA
              title={data.cta.title}
              description={data.cta.description}
              buttonLabel={data.cta.buttonLabel}
              onClick={() => setIsFormOpen(true)}
            />
          </div>
        </Container>
      </Section>

      <AnimatePresence>
        {selected && <ReviewModal review={selected} onClose={() => setSelected(null)} />}
        {isFormOpen && <ReviewFormModal open={isFormOpen} onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
    </>
  )
}