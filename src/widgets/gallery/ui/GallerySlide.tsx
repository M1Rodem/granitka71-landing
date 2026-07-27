import type { GalleryItem } from '@/entities/gallery'
import { Expand } from 'lucide-react'
import { getImage } from '@/shared/lib/image/ImageRegistry'
import { Heading, Image, Text } from '@/shared/ui'
import styles from './gallery-slide.module.css'

interface GallerySlideProps {
  item: GalleryItem
  onClick?: () => void
  isCurrent?: boolean
}

export function GallerySlide({
  item,
  onClick,
  isCurrent = false,
}: GallerySlideProps) {
  const image = getImage(item.imageId)

  return (
    <div
      className={`${styles.card} ${isCurrent ? styles.cardCurrent : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          image={image}
          className={styles.image}
          fit="cover"
        />

        <div className={styles.overlay} />
        <div className={styles.shine} />
      </div>

      <div className={styles.content}>
        <Heading
          level={3}
          size="5"
          className={styles.title}
        >
          {item.title}
        </Heading>

        <div className={styles.descriptionWrapper}>
          <div className={styles.descriptionInner}>
            <Text
              tone="muted"
              size="sm"
              className={styles.description}
            >
              {item.description}
            </Text>
          </div>
        </div>
      </div>

      <div className={styles.expandHint}>
        <Expand size={18} strokeWidth={2} />
      </div>
    </div>
  )
}