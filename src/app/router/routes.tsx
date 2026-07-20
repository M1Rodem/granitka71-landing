import type { RouteObject } from 'react-router-dom'

import { LandingRoute } from './RouteComponents'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingRoute />,
  },
]
