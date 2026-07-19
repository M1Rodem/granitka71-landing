import {
  HelmetProvider as ReactHelmetProvider,
} from 'react-helmet-async'

import type { ReactNode } from 'react'


interface Props {
  children: ReactNode
}


export function HelmetProvider({
  children,
}: Props) {
  return (
    <ReactHelmetProvider>
      {children}
    </ReactHelmetProvider>
  )
}