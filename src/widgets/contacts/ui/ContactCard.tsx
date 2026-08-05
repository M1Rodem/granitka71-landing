import type { ContactItem } from '@/entities/contact'

import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { MaxIcon, TelegramIcon, WhatsAppIcon } from '@/shared/icons'

import { fadeInVariants } from '@/shared/motion'
import { ButtonLink, Surface, Text } from '@/shared/ui'
import { useNavigate } from '@/shared/hooks'  // 👈 Импортируем хук

import styles from './contact-card.module.css'

interface ContactCardProps {
  contact: ContactItem
}

const icons = {
  phone: Phone,
  email: Mail,
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  max: MaxIcon,
  website: ArrowUpRight,
  address: MapPin,
}

export function ContactCard({ contact }: ContactCardProps) {
  const Icon = icons[contact.type]
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()  // 👈 Используем хук

  const isExternal =
    contact.type === 'telegram' ||
    contact.type === 'whatsapp' ||
    contact.type === 'max' ||
    contact.type === 'website'

  const hasValue = contact.value && contact.value.trim().length > 0
  const hasPhones = contact.phones && contact.phones.length > 0

  const isPhoneType = contact.type === 'phone'
  const phoneList = contact.phones || []

  const handlePhoneClick = (href: string) => {
    navigate(href)  // 👈 Используем хук вместо прямого обращения
    setIsDropdownOpen(false)
  }

  // Закрытие дропдауна при клике вне его области
  useEffect(() => {
    if (!isDropdownOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isDropdownOpen])

  return (
    <motion.div variants={fadeInVariants}>
      <Surface className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <Icon size={24} className={styles.icon} />
          </div>
          <Text weight="semibold" className={styles.title}>
            {contact.title}
          </Text>
        </div>

        {/* Телефоны — как обычный value, но с запятыми */}
        {hasPhones && (
          <div className={styles.phonesInline}>
            {phoneList.map((phone, index) => (
              <span key={index} className={styles.phoneItem}>
                {phone.value}
                {index < phoneList.length - 1 && ', '}
              </span>
            ))}
          </div>
        )}

        {/* Обычный value (не телефон) */}
        {hasValue && !isPhoneType && (
          <Text className={styles.value}>{contact.value}</Text>
        )}

        {/* Кнопка */}
        {isPhoneType ? (
          <div className={styles.phoneDropdownWrapper} ref={dropdownRef}>
            <button
              className={styles.phoneDropdownButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              <span>{contact.buttonLabel}</span>
              <ChevronDown
                size={16}
                className={isDropdownOpen ? styles.chevronOpen : styles.chevronClosed}
              />
            </button>

            {/* Анимированный дропдаун */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className={styles.phoneDropdownMenu}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ 
                    duration: 0.2, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  style={{ transformOrigin: 'bottom center' }}
                >
                  {phoneList.map((phone, index) => (
                    <button
                      key={index}
                      className={styles.phoneDropdownItem}
                      onClick={() => handlePhoneClick(phone.href)}
                    >
                      <Phone size={14} className={styles.itemIcon} />
                      {phone.value}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <ButtonLink
            href={contact.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            variant="secondary"
            className={styles.button}
          >
            {contact.buttonLabel}
          </ButtonLink>
        )}
      </Surface>
    </motion.div>
  )
}