import { Copy, Check, MessageSquarePlus } from 'lucide-react'
import { useState } from 'react'

import { Button, Dialog, Heading, Surface, Text } from '@/shared/ui'

import styles from './review-form-modal.module.css'

const EMAIL = 'info@granitka71.ru'

export function ReviewFormModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      document.body.append(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Dialog open={open} onClose={onClose} size="lg">
      <div className={styles.modal}>
        <Surface className={styles.notice}>
          <div className={styles.noticeIcon}>
            <MessageSquarePlus size={40} />
          </div>
          <Heading level={2}>Оставить отзыв</Heading>
          <Text tone="muted" className={styles.description}>
            Форма отзывов временно недоступна. Вы можете отправить отзыв на почту:
          </Text>
          <div className={styles.emailWrapper}>
            <button className={styles.emailButton} onClick={() => (window.location.href = `mailto:${EMAIL}`)}>
              <span className={styles.emailText}>{EMAIL}</span>
            </button>
            <button className={styles.copyButton} onClick={handleCopy}>
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span className={styles.copyLabel}>{copied ? 'Скопировано' : 'Копировать'}</span>
            </button>
          </div>
          <Button onClick={onClose} size="lg">
            Понятно
          </Button>
        </Surface>
      </div>
    </Dialog>
  )
}