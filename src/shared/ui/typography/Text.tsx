import type { ElementType, ReactElement, ReactNode } from 'react'

import type { PolymorphicProps } from '@/shared/types'

import styles from './Typography.module.css'

type TextSize = 'sm' | 'md' | 'lg'
type TextTone = 'default' | 'muted' | 'inverse' | 'accent'
type TextWeight = 'regular' | 'medium' | 'semibold'
type TextOwnProps = {
  children: ReactNode
  size?: TextSize
  tone?: TextTone
  weight?: TextWeight
}

export type TextProps<TElement extends ElementType = 'p'> =
  PolymorphicProps<TElement, TextOwnProps>

export function Text<TElement extends ElementType = 'p'>({
  as,
  children,
  className,
  size = 'md',
  tone = 'default',
  weight = 'regular',
  ...props
}: TextProps<TElement>): ReactElement {
  const Component = as ?? 'p'
  const classes = [
    styles.text,
    styles[`text-${size}`],
    styles[`tone-${tone}`],
    styles[`weight-${weight}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
