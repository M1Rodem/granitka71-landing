import type { ReactNode } from 'react'


interface Props {
  children: ReactNode
}


export function MotionProvider({
  children,
}: Props) {
  return (
    <>
      {children}
    </>
  )
}