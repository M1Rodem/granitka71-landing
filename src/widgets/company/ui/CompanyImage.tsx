import { createClassName } from '@/shared/utils'
import { Image } from '@/shared/ui'
import { getImage } from '@/shared/lib/image/ImageRegistry'

import styles from './company-image.module.css'

interface CompanyImageProps {
  className?: string
}

export function CompanyImage({ className }: CompanyImageProps) {
  const companyImage = getImage('company')

  return (
    <div className={createClassName(styles.wrapper, className)}>
      <Image
        image={companyImage}
        className={styles.image}
        radius="lg"
        fit="cover"
      />
    </div>
  )
}