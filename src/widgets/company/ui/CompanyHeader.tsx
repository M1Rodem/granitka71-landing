import { createClassName } from '@/shared/utils'
import { Heading, Text } from '@/shared/ui'

import styles from './company-header.module.css'

interface CompanyHeaderProps {
  className?: string
  eyebrow: string
  title: string
}

export function CompanyHeader({
  className,
  eyebrow,
  title,
}: CompanyHeaderProps) {
  return (
    <header className={createClassName(styles.header, className)}>
      <Text
        className={styles.eyebrow}
        size="sm"
        weight="medium"
      >
        {eyebrow}
      </Text>

      <Heading
        className={styles.title}
        level={2}
      >
        {title}
      </Heading>
    </header>
  )
}