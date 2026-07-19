import type { ReactNode } from 'react'

import {
  HelmetProvider,
} from './HelmetProvider'

import {
  MotionProvider,
} from './MotionProvider'

import {
  QueryProvider,
} from './QueryProvider'

import {
  RouterProvider,
} from './RouterProvider'


interface Props {
  children: ReactNode
}


export function AppProvider({
  children,
}: Props) {
  return (
    <HelmetProvider>
      <QueryProvider>
        <RouterProvider>
          <MotionProvider>
            {children}
          </MotionProvider>
        </RouterProvider>
      </QueryProvider>
    </HelmetProvider>
  )
}