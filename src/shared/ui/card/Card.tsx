import type { ElementType, ReactElement, ReactNode } from 'react'

import type { PolymorphicProps } from '@/shared/types'

import styles from './Card.module.css'
import surfaceStyles from '@/shared/ui/surface/Surface.module.css'

type CardPadding = 'sm' | 'md' | 'lg'
type CardOwnProps = {
  children: ReactNode
  padding?: CardPadding
}

export type CardProps<TElement extends ElementType = 'article'> =
  PolymorphicProps<TElement, CardOwnProps>

export function Card<TElement extends ElementType = 'article'>({
  as,
  children,
  className,
  padding = 'md',
  ...props
}: CardProps<TElement>): ReactElement {
  const Component = as ?? 'article'
  const classes = [
    surfaceStyles.surface,
    surfaceStyles['tone-default'],
    surfaceStyles[`padding-${padding}`],
    styles.card,
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
