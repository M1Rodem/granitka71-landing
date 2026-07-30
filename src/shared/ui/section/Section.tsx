import type { ElementType, ReactElement, ReactNode } from 'react'

import type { PolymorphicProps } from '@/shared/types'

import styles from './Section.module.css'

type SectionTone = 'transparent' | 'background' | 'surface' | 'primary' | 'footer'
type SectionOwnProps = {
  children: ReactNode
  tone?: SectionTone
}

export type SectionProps<TElement extends ElementType = 'section'> =
  PolymorphicProps<TElement, SectionOwnProps>

export function Section<TElement extends ElementType = 'section'>({
  as,
  children,
  className,
  tone = 'transparent',
  ...props
}: SectionProps<TElement>): ReactElement {
  const Component = as ?? 'section'
  const classes = [styles.section, styles[`tone-${tone}`], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}