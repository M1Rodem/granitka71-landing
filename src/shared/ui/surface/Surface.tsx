import type { ElementType, ReactElement, ReactNode } from 'react'

import type { PolymorphicProps } from '@/shared/types'

import styles from './Surface.module.css'

type SurfaceTone = 'default' | 'glass'
type SurfacePadding = 'none' | 'sm' | 'md' | 'lg'
type SurfaceOwnProps = {
  children: ReactNode
  padding?: SurfacePadding
  tone?: SurfaceTone
}

export type SurfaceProps<TElement extends ElementType = 'div'> =
  PolymorphicProps<TElement, SurfaceOwnProps>

export function Surface<TElement extends ElementType = 'div'>({
  as,
  children,
  className,
  padding = 'md',
  tone = 'default',
  ...props
}: SurfaceProps<TElement>): ReactElement {
  const Component = as ?? 'div'
  const classes = [
    styles.surface,
    styles[`tone-${tone}`],
    styles[`padding-${padding}`],
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
