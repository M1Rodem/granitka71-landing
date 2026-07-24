import { motion } from 'framer-motion'

import { Container, Section } from '@/shared/ui'
import { useCompany } from '@/shared/hooks'
import { staggerVariants, slideUpVariants } from '@/shared/motion' // Импортируем ТВОИ типобезопасные варианты

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
        {/* Используем твой staggerVariants для каскада */}
        <motion.div
          className={styles.layout}
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Используем твой slideUpVariants для текстов */}
          <motion.div variants={slideUpVariants}>
            <CompanyHeader
              className={styles.header}
              eyebrow={data.eyebrow}
              title={data.title}
            />
          </motion.div>

          <motion.div variants={slideUpVariants}>
            <CompanyDescription
              className={styles.description}
              description={data.description}
            />
          </motion.div>

          <motion.div variants={slideUpVariants}>
            <CompanyScrollLink
              className={styles.link}
              scrollLink={data.scrollLink}
            />
          </motion.div>

          {/* Для картинки делаем уникальный выезд справа через инлайн-стили + as const */}
          <motion.div 
            className={styles.image} 
            initial={{ opacity: 0, x: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.8, 
              // as const решает проблему с типами Framer Motion
              ease: [0.22, 1, 0.36, 1] as const 
            }}
          >
            <CompanyImage />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}