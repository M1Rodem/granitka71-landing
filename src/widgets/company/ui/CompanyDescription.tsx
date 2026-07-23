import { createClassName } from '@/shared/utils'
import { Text } from '@/shared/ui'

import styles from './company-description.module.css'

interface CompanyDescriptionProps {
  className?: string
  description: string[]
}

export function CompanyDescription({
  className,
  description,
}: CompanyDescriptionProps) {
  return (
    <div className={createClassName(styles.description, className)}>
      {description.map((paragraph) => (
        <Text
          key={paragraph}
          className={styles.item}
          size="lg"
          tone="muted"
        >
          {paragraph}
        </Text>
      ))}
    </div>
  )
}