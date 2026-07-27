import { motion } from 'framer-motion'

import { useGallery } from '@/shared/hooks'
import { staggerVariants } from '@/shared/motion'
import {
  Container,
  Section,
  Text,
} from '@/shared/ui'

import { GalleryCarousel } from './GalleryCarousel'
import { GalleryCTA } from './GalleryCTA'
import { GalleryHeader } from './GalleryHeader'

import styles from './gallery.module.css'

export function Gallery() {
  const { data, isLoading, error } = useGallery()

  if (isLoading) {
    return (
      <Section
        id="gallery"
        tone="background"
      >
        <Container>
          <div className={styles.section}>
            <div className={styles.skeletonHeader} />
            <div className={styles.skeletonCarousel} />
            <div className={styles.skeletonCta} />
          </div>
        </Container>
      </Section>
    )
  }

  if (error || !data) {
    return (
      <Section
        id="gallery"
        tone="background"
      >
        <Container>
          <Text tone="muted">
            Не удалось загрузить информацию. Пожалуйста, обновите страницу.
          </Text>
        </Container>
      </Section>
    )
  }

  const items = data.items
    .filter((item) => item.isVisible)
    .sort((a, b) => a.order - b.order)

  return (
    <Section
      id="gallery"
      tone="background"
    >
      <Container>
        <motion.div
          className={styles.section}
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <GalleryHeader
            eyebrow={data.header.eyebrow}
            title={data.header.title}
            description={data.header.description}
          />

          <GalleryCarousel
            items={items}
          />

          <GalleryCTA
            title={data.cta.title}
            description={data.cta.description}
            buttonLabel={data.cta.buttonLabel}
            buttonHref={data.cta.buttonHref}
          />
        </motion.div>
      </Container>
    </Section>
  )
}