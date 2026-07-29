import { motion } from 'framer-motion'
import {
  ArrowRight,
  Map,
  Navigation,
} from 'lucide-react'

import { RouteProvider } from '../../model/route-provider'
import type { RouteProviderItem } from '../../model/route-provider-item'

import styles from './RouteProviderCard.module.css'

interface RouteProviderCardProps {
  item: RouteProviderItem
  onClick(provider: RouteProvider): void
}

export function RouteProviderCard({
  item,
  onClick,
}: RouteProviderCardProps) {
  const Icon =
    item.provider === RouteProvider.TwoGis
      ? Map
      : Navigation

  return (
    <motion.button
      type="button"
      className={styles.card}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.985,
      }}
      onClick={() => onClick(item.provider)}
    >
      <div className={styles.icon}>
        <Icon size={22} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {item.title}
        </h3>

        <p className={styles.description}>
          {item.description}
        </p>
      </div>

      <ArrowRight
        size={18}
        className={styles.arrow}
      />
    </motion.button>
  )
}