import { motion } from 'framer-motion'

import type { FooterNavigationItem } from '@/entities/footer'

import { useSmoothScroll } from '@/shared/hooks'
import { slideUpVariants } from '@/shared/motion'

import styles from './footer.module.css'
import navStyles from './footer-navigation.module.css'

interface FooterNavigationProps {
  items: FooterNavigationItem[]
}

export function FooterNavigation({ items }: FooterNavigationProps) {
  const scrollTo = useSmoothScroll()

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    scrollTo(href.replace('#', ''))
  }

  return (
    <motion.nav className={styles.column} variants={slideUpVariants} aria-label="Навигация в подвале">
      <h3 className={styles.columnTitle}>Навигация</h3>
      <ul className={navStyles.navList}>
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={navStyles.navLink}
              onClick={handleClick(item.href)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}