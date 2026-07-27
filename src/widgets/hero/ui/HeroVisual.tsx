import { motion } from 'framer-motion'

import { scaleInVariants } from '@/shared/motion'
import { Surface, Image } from '@/shared/ui'
import { getImage } from '@/shared/lib/image/ImageRegistry'

import styles from './hero-visual.module.css'

export function HeroVisual() {
  const heroImage = getImage('hero')

  return (
    <motion.div className={styles.visual} variants={scaleInVariants}>
      <Surface className={styles.visualSurface}>
        <Image image={heroImage} radius="lg" fit="cover" />
      </Surface>
    </motion.div>
  )
}