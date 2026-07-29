import { motion } from 'framer-motion'
import { MapPinned } from 'lucide-react'

import type { ContactLocation } from '@/entities/contact'

import { RouteButton } from '@/features/route-navigation/ui/RouteButton'
import { fadeInVariants } from '@/shared/motion'
import { Heading, Surface, Text } from '@/shared/ui'

import styles from './contacts-location.module.css'

interface ContactsLocationProps {
  locations: ContactLocation[]
}

export function ContactsLocation({
  locations,
}: ContactsLocationProps) {
  return (
    <motion.div
      variants={fadeInVariants}
      className={styles.section}
    >
      {/* Изменено на styles.panel во избежание конфликта классов */}
      <Surface className={styles.panel}>
        <header className={styles.heading}>
          <Heading level={3}>
            Наши точки
          </Heading>

          <Text tone="muted">
            Выберите удобную точку и постройте маршрут в любом приложении.
          </Text>
        </header>

        <div className={styles.grid}>
          {locations.map(location => (
            <Surface
              key={location.id}
              className={styles.location} /* БЫЛО styles.card -> СТАЛО styles.location */
            >
              <div className={styles.locationHeader}>
                <div className={styles.icon}>
                  <MapPinned size={22} />
                </div>

                <div className={styles.content}>
                  <Heading level={4}>
                    {location.title}
                  </Heading>

                  <Text
                    tone="muted"
                    className={styles.address}
                  >
                    {location.address}
                  </Text>
                </div>
              </div>

              <div className={styles.footer}>
                <RouteButton location={location} />
              </div>
            </Surface>
          ))}
        </div>
      </Surface>
    </motion.div>
  )
}