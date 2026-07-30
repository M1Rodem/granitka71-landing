import { motion } from 'framer-motion'

import { useFooter } from '@/shared/hooks'
import { staggerVariants } from '@/shared/motion'
import { Container, Section, Text } from '@/shared/ui'

import { FooterAddresses } from './FooterAddresses'
import { FooterBottom } from './FooterBottom'
import { FooterCompany } from './FooterCompany'
import { FooterContacts } from './FooterContacts'
import { FooterNavigation } from './FooterNavigation'

import styles from './footer.module.css'

export function Footer() {
  const { data, isLoading, error } = useFooter()

  if (isLoading) {
    return (
      <Section as="footer" id="footer" tone="footer">
        <Container>
          <div className={styles.footer}>
            <div className={styles.grid}>
              <div className={styles.column}>
                <div className={styles.skeleton} style={{ height: '2rem', width: '8rem' }} />
                <div className={styles.skeleton} style={{ height: '4rem', width: '100%' }} />
              </div>
              <div className={styles.column}>
                <div className={styles.skeleton} style={{ height: '1.5rem', width: '6rem' }} />
                <div className={styles.skeleton} style={{ height: '1rem', width: '80%' }} />
                <div className={styles.skeleton} style={{ height: '1rem', width: '70%' }} />
                <div className={styles.skeleton} style={{ height: '1rem', width: '90%' }} />
              </div>
              <div className={styles.column}>
                <div className={styles.skeleton} style={{ height: '1.5rem', width: '6rem' }} />
                <div className={styles.skeleton} style={{ height: '1rem', width: '60%' }} />
                <div className={styles.skeleton} style={{ height: '1rem', width: '70%' }} />
              </div>
              <div className={styles.column}>
                <div className={styles.skeleton} style={{ height: '1.5rem', width: '6rem' }} />
                <div className={styles.skeleton} style={{ height: '1rem', width: '80%' }} />
                <div className={styles.skeleton} style={{ height: '1rem', width: '90%' }} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  if (error || !data) {
    return (
      <Section as="footer" id="footer" tone="footer">
        <Container>
          <Text tone="muted">Не удалось загрузить информацию.</Text>
        </Container>
      </Section>
    )
  }

  return (
    <Section as="footer" id="footer" tone="footer">
      <Container>
        <motion.div
          className={styles.footer}
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className={styles.grid}>
            <FooterCompany company={data.company} />
            <FooterNavigation items={data.navigation} />
            <FooterContacts contacts={data.contacts} socials={data.socials} />
            <FooterAddresses addresses={data.addresses} legal={data.legal} />
          </div>

          <FooterBottom companyName={data.company.name} legal={data.legal} />
        </motion.div>
      </Container>
    </Section>
  )
}