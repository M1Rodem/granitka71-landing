import type { CompanyScrollLink as CompanyScrollLinkData } from '@/entities/company'

import { ArrowDown } from 'lucide-react'

import { createClassName } from '@/shared/utils'
import { ButtonLink } from '@/shared/ui'

import styles from './company-scroll-link.module.css'

interface CompanyScrollLinkProps {
  className?: string
  scrollLink: CompanyScrollLinkData
}

export function CompanyScrollLink({
  className,
  scrollLink,
}: CompanyScrollLinkProps) {
  return (
    <div className={createClassName(styles.wrapper, className)}>
      <ButtonLink
        href={scrollLink.href}
        variant="secondary"
        size="lg"
      >
        {scrollLink.label}
        <ArrowDown
          className={styles.icon}
          aria-hidden="true"
        />
      </ButtonLink>
    </div>
  )
}