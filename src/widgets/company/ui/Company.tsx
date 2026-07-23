import { motion } from 'framer-motion'

import { slideUpVariants } from '@/shared/motion'
import { Container, Section } from '@/shared/ui'
import { useCompany } from '@/shared/hooks'

import { CompanyHeader } from './CompanyHeader'
import { CompanyDescription } from './CompanyDescription'
import { CompanyImage } from './CompanyImage'
import { CompanyScrollLink } from './CompanyScrollLink'

import styles from './company.module.css'

export function Company() {
  const { data, isLoading, error } = useCompany()

  if (isLoading) return null
  if (error) return null
  if (!data) return null

  return (
    <Section id="about" tone="surface">
      <Container>
        <motion.div
          className={styles.layout}
          variants={slideUpVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <CompanyHeader
            className={styles.header}
            eyebrow={data.eyebrow}
            title={data.title}
          />

          <CompanyDescription
            className={styles.description}
            description={data.description}
          />

          <CompanyScrollLink
            className={styles.link}
            scrollLink={data.scrollLink}
          />

          <CompanyImage
            className={styles.image}
          />
        </motion.div>
      </Container>
    </Section>
  )
}