import { motion } from 'framer-motion'

import { scaleInVariants } from '@/shared/motion'
import { Surface, Image } from '@/shared/ui'

import styles from './HeroVisual.module.css'

interface HeroVisualProps {
  image: string
}

export function HeroVisual({
  image,
}: HeroVisualProps) {
  return (
    <motion.div
      className={styles.visual}
      variants={scaleInVariants}
    >
      <Surface
        className={styles.visualSurface}
      >
        <Image
          src={image}
          alt="Изготовление памятников Гранитка71"
          width={800}
          height={900}
          loading="eager"
        />
      </Surface>
    </motion.div>
  )
}