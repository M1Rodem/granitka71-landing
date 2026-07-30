import { motion } from 'framer-motion'

import type { FooterCompany as FooterCompanyType } from '@/entities/footer'

import { slideUpVariants } from '@/shared/motion'
import { Text } from '@/shared/ui'

import styles from './footer.module.css'
import companyStyles from './footer-company.module.css'
import logo from '@/shared/assets/images/logo/logo.png'

interface FooterCompanyProps {
  company: FooterCompanyType
}

export function FooterCompany({ company }: FooterCompanyProps) {
  return (
    <motion.div className={styles.column} variants={slideUpVariants}>
      <div className={companyStyles.companyLogo}>
        <img src={logo} alt={company.name} width={48} height={48} />
        <span className={companyStyles.companyName}>{company.name}</span>
      </div>
      <Text className={companyStyles.companyDescription} size="sm" tone="muted">
        {company.description}
      </Text>
    </motion.div>
  )
}