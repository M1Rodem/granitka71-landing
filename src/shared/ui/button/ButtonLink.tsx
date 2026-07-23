import type { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react'

import styles from './Button.module.css'
import type { ButtonSize, ButtonVariant } from './button.types'

export interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  children: ReactNode
  isDisabled?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

export function ButtonLink({
  children,
  className,
  href,
  isDisabled = false,
  size = 'md',
  tabIndex,
  variant = 'primary',
  onClick,
  ...props
}: ButtonLinkProps): ReactElement {
  const classes = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    isDisabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (isDisabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    onClick?.(event)
  }

  return (
    <a
      {...props}
      aria-disabled={isDisabled || undefined}
      className={classes}
      href={isDisabled ? undefined : href}
      onClick={handleClick}
      tabIndex={isDisabled ? -1 : tabIndex}
    >
      <span className={styles.content}>
        {children}
      </span>
    </a>
  )
}