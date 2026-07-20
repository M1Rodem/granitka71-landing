import type { ElementType, ReactElement, ReactNode } from 'react'

import type { PolymorphicProps } from '@/shared/types'

import styles from './Container.module.css'

type ContainerSize = 'sm' | 'md' | 'lg' | 'full'
type ContainerOwnProps = {
  children: ReactNode
  size?: ContainerSize
}

export type ContainerProps<TElement extends ElementType = 'div'> =
  PolymorphicProps<TElement, ContainerOwnProps>

export function Container<TElement extends ElementType = 'div'>({
  as,
  children,
  className,
  size = 'lg',
  ...props
}: ContainerProps<TElement>): ReactElement {
  const Component = as ?? 'div'
  const classes = [styles.container, styles[`size-${size}`], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
