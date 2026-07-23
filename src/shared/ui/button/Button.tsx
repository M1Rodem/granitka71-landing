import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

import styles from './Button.module.css'
import type { ButtonSize, ButtonVariant } from './button.types'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode
  isLoading?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

export function Button({
  children,
  className,
  disabled = false,
  isLoading = false,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps): ReactElement {
  const isDisabled = disabled || isLoading

  const classes = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    isLoading ? styles.loading : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...props}
      aria-busy={isLoading || undefined}
      className={classes}
      disabled={isDisabled}
      type={type}
    >
      <span className={styles.content} data-hidden={isLoading}>
        {children}
      </span>

      {isLoading ? (
        <span aria-hidden="true" className={styles.spinner} />
      ) : null}
    </button>
  )
}