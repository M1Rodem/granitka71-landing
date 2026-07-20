import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react'

export type PolymorphicProps<
  TElement extends ElementType,
  TOwnProps = object,
> = TOwnProps & {
  as?: TElement
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<TElement>, keyof TOwnProps | 'as' | 'children'>
