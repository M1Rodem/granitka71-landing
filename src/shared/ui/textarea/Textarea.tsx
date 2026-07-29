import { forwardRef } from 'react'

import styles from './Textarea.module.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, className, ...props }, ref) {
    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <textarea ref={ref} className={`${styles.textarea} ${className || ''}`} {...props} />
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'