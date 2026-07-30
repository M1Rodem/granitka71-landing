import type { FooterLegal } from '@/entities/footer'

import bottomStyles from './footer-bottom.module.css'

interface FooterBottomProps {
  companyName: string
  legal: FooterLegal
}

export function FooterBottom({ companyName, legal }: FooterBottomProps) {
  const currentYear = new Date().getFullYear()

  return (
    <div className={bottomStyles.bottom}>
      <span className={bottomStyles.copyright}>
        © {currentYear} <strong>{companyName}.ru</strong>
      </span>
      <span className={bottomStyles.copyright}>
        ИП {legal.fullName}
      </span>
    </div>
  )
}