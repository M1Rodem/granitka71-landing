import type { ContactItem } from '@/entities/contact'

import { motion } from 'framer-motion'

import { staggerVariants } from '@/shared/motion'

import { ContactCard } from './ContactCard'

import styles from './contacts-grid.module.css'

interface ContactsGridProps {
  contacts: ContactItem[]
}

export function ContactsGrid({ contacts }: ContactsGridProps) {
  return (
    <motion.div
      className={styles.grid}
      variants={staggerVariants}
      initial="initial"
      animate="animate"
    >
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </motion.div>
  )
}