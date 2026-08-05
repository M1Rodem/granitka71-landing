import { motion } from 'framer-motion'

import type { FooterContacts as FooterContactsType } from '@/entities/footer'
import type { FooterSocial } from '@/entities/footer'

import { slideUpVariants } from '@/shared/motion'

import { FooterSocials } from './FooterSocials'

import styles from './footer.module.css'
import contactsStyles from './footer-contacts.module.css'

interface FooterContactsProps {
  contacts: FooterContactsType
  socials: FooterSocial[]
}

export function FooterContacts({ contacts, socials }: FooterContactsProps) {
  const hasPhones = contacts.phones && contacts.phones.length > 0

  return (
    <motion.div className={styles.column} variants={slideUpVariants}>
      <h3 className={styles.columnTitle}>Контакты</h3>

      <div className={contactsStyles.contactItem}>
        <span className={contactsStyles.contactLabel}>Телефон</span>

        {/* Если есть несколько телефонов — показываем список */}
        {hasPhones ? (
          <div className={contactsStyles.phonesList}>
            {contacts.phones?.map((phone, index) => (
              <a
                key={index}
                href={phone.href}
                className={contactsStyles.phoneLink}
              >
                {phone.value}
              </a>
            ))}
          </div>
        ) : (
          <a
            href={`tel:${contacts.phone.replace(/\s/g, '')}`}
            className={contactsStyles.contactLink}
          >
            {contacts.phone}
          </a>
        )}
      </div>

      <div className={contactsStyles.contactItem}>
        <span className={contactsStyles.contactLabel}>Email</span>
        <a href={`mailto:${contacts.email}`} className={contactsStyles.contactLink}>
          {contacts.email}
        </a>
      </div>

      <FooterSocials socials={socials} />
    </motion.div>
  )
}