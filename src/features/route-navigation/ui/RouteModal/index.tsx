import { createPortal } from 'react-dom' // <-- Добавлен импорт портала
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

import type { ContactLocation } from '@/entities/contact'

import { openRoute } from '../../lib/openRoute'
import { RouteProvider } from '../../model/route-provider'
import type { RouteProviderItem } from '../../model/route-provider-item'

import { RouteProviderCard } from '../RouteProviderCard'

import styles from './RouteModal.module.css'

interface RouteModalProps {
  open: boolean
  location: ContactLocation
  onClose(): void
}

const providers: RouteProviderItem[] = [
  {
    provider: RouteProvider.TwoGis,
    title: '2ГИС',
    description: 'Открыть маршрут в 2ГИС',
  },
  {
    provider: RouteProvider.Yandex,
    title: 'Яндекс Карты',
    description: 'Открыть маршрут в Яндекс Картах',
  },
]

export function RouteModal({
  open,
  location,
  onClose,
}: RouteModalProps) {
  function handleSelect(provider: RouteProvider) {
    openRoute(provider, location)
    onClose()
  }
  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className={styles.wrapper}
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 24,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 24,
            }}
            transition={{
              duration: 0.22,
              ease: 'easeOut',
            }}
          >
            <div className={styles.modal}>
              <button
                type="button"
                className={styles.close}
                onClick={onClose}
                aria-label="Закрыть"
              >
                <X size={18} />
              </button>

              <header className={styles.header}>
                <h2 className={styles.title}>
                  Построить маршрут
                </h2>

                <p className={styles.subtitle}>
                  Выберите приложение, в котором хотите открыть маршрут.
                </p>
              </header>

              <div className={styles.providers}>
                {providers.map(provider => (
                  <RouteProviderCard
                    key={provider.provider}
                    item={provider}
                    onClick={handleSelect}
                  />
                ))}
              </div>

              <div className={styles.info}>
                Если приложение установлено, маршрут откроется автоматически.
                Иначе будет открыта его веб-версия.
              </div>

              <button
                type="button"
                className={styles.cancel}
                onClick={onClose}
              >
                Отмена
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}