import { forwardRef } from 'react'

import styles from './Checkbox.module.css'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ children, className, ...props }, ref) {
    return (
      <label className={`${styles.wrapper} ${className || ''}`}>
        <input ref={ref} type="checkbox" className={styles.checkbox} {...props} />
        {children && <span className={styles.label}>{children}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'