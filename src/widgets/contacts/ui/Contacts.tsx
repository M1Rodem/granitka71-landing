import { motion } from 'framer-motion'

import { useContacts } from '@/shared/hooks'
import { staggerVariants } from '@/shared/motion'
import { Container, Section, Text } from '@/shared/ui'

import { ContactsGrid } from './ContactsGrid'
import { ContactsHeader } from './ContactsHeader'
import { ContactsLocation } from './ContactsLocation'
import { ContactsMap } from './ContactsMap'

import styles from './contacts.module.css'

export function Contacts() {
  const { data, isLoading, error } = useContacts()

  if (isLoading) {
    return (
      <Section id="contacts" tone="background">
        <Container>
          <Text tone="muted">Загрузка контактов...</Text>
        </Container>
      </Section>
    )
  }

  if (error || !data) {
    return (
      <Section id="contacts" tone="background">
        <Container>
          <Text tone="muted">Не удалось загрузить контакты.</Text>
        </Container>
      </Section>
    )
  }

  return (
    <Section id="contacts" tone="background">
      <Container>
        {/* Добавлена обертка для красивого последовательного появления */}
        <motion.div
          className={styles.section}
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <ContactsHeader
            eyebrow={data.header.eyebrow}
            title={data.header.title}
            description={data.header.description}
          />

          <ContactsGrid contacts={data.contacts} />

          <div className={styles.mapLayout}>
            <ContactsMap />
            <ContactsLocation locations={data.locations} />
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}