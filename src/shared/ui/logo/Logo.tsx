import { forwardRef } from 'react'

import { createClassName } from '@/shared/utils'

import { LogoSvg } from './LogoSvg'
import type { LogoProps } from './logo.types'

import styles from './Logo.module.css'

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  function Logo({ size = 56, className, variant = 'default' }, ref) {
    return (
      <div
        ref={ref}
        className={createClassName(styles.logo, className)}
        style={{ width: size, height: size }}
      >
        <LogoSvg size={size} variant={variant} />
      </div>
    )
  }
)

Logo.displayName = 'Logo'