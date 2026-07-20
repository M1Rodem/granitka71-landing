import type { ElementType, ReactElement, ReactNode } from 'react'

import type { PolymorphicProps } from '@/shared/types'

import styles from './Typography.module.css'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingSize = '1' | '2' | '3' | '4' | '5' | '6'
type HeadingTone = 'default' | 'muted' | 'inverse' | 'accent'
type HeadingOwnProps = {
  children: ReactNode
  level?: HeadingLevel
  size?: HeadingSize
  tone?: HeadingTone
}

export type HeadingProps<TElement extends ElementType = 'h2'> =
  PolymorphicProps<TElement, HeadingOwnProps>

export function Heading<TElement extends ElementType = 'h2'>({
  as,
  children,
  className,
  level = 2,
  size,
  tone = 'default',
  ...props
}: HeadingProps<TElement>): ReactElement {
  const Component = as ?? (`h${level}` as ElementType)
  const resolvedSize = size ?? String(level)
  const classes = [
    styles.heading,
    styles[`heading-${resolvedSize}`],
    styles[`tone-${tone}`],
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
