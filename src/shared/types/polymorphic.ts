import type { ComponentPropsWithoutRef, ElementType } from 'react'

export type PolymorphicProps<
  TElement extends ElementType,
  TProps extends object = object,
> = {
  as?: TElement
} & Omit<ComponentPropsWithoutRef<TElement>, keyof TProps | 'as'> &
  TProps