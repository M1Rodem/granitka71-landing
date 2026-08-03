import type { ContactItem } from '@/entities/contact'

import { motion } from 'framer-motion'

import { staggerVariants } from '@/shared/motion'

import { ContactCard } from './ContactCard'

import styles from './contacts-grid.module.css'

interface ContactsGridProps {
  contacts: ContactItem[]
}

export function ContactsGrid({ contacts }: ContactsGridProps) {
  // Сортируем контакты в нужном порядке
  const orderedContacts = [...contacts]
  
  // Находим индексы нужных контактов
  const whatsappIndex = orderedContacts.findIndex(c => c.id === 'whatsapp')
  const telegramIndex = orderedContacts.findIndex(c => c.id === 'telegram')
  const maxIndex = orderedContacts.findIndex(c => c.id === 'max')
  const phoneIndex = orderedContacts.findIndex(c => c.id === 'phone')
  const emailIndex = orderedContacts.findIndex(c => c.id === 'email')
  
  // Собираем в нужном порядке
  const firstRow = [
    orderedContacts[whatsappIndex],
    orderedContacts[telegramIndex],
    orderedContacts[maxIndex]
  ].filter(Boolean) as ContactItem[]
  
  const secondRow = [
    orderedContacts[phoneIndex],
    orderedContacts[emailIndex]
  ].filter(Boolean) as ContactItem[]

  return (
    <motion.div
      className={styles.gridWrapper}
      variants={staggerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Первая строка - 3 контакта (WhatsApp, Telegram, MAX) */}
      <div className={styles.row}>
        {firstRow.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>

      {/* Вторая строка - 2 контакта (Телефон, Почта) - РАСТЯНУТЫЕ */}
      {secondRow.length > 0 && (
        <div className={styles.rowTwo}>
          {secondRow.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </motion.div>
  )
}