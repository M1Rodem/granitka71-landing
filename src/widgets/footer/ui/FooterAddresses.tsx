import { motion } from 'framer-motion'

import type { FooterAddress } from '@/entities/footer'
import type { FooterLegal } from '@/entities/footer'

import { slideUpVariants } from '@/shared/motion'

import styles from './footer.module.css'
import addressesStyles from './footer-addresses.module.css'

interface FooterAddressesProps {
  addresses: FooterAddress[]
  legal: FooterLegal
}

export function FooterAddresses({ addresses, legal }: FooterAddressesProps) {
  return (
    <motion.div className={styles.column} variants={slideUpVariants}>
      <h3 className={styles.columnTitle}>Наши точки</h3>

      <ul className={addressesStyles.addressList}>
        {addresses.map((address) => (
          <li key={address.id} className={addressesStyles.addressItem}>
            <span className={addressesStyles.addressTitle}>{address.title}</span>
            <span className={addressesStyles.addressText}>{address.address}</span>
          </li>
        ))}
      </ul>

      <div className={addressesStyles.legal}>
        <span className={addressesStyles.legalText}>
          <span className={addressesStyles.legalName}>{legal.fullName}</span>
        </span>
        <span className={addressesStyles.legalText}>ОГРНИП {legal.ogrnip}</span>
        <span className={addressesStyles.legalText}>ИНН {legal.inn}</span>
      </div>
    </motion.div>
  )
}