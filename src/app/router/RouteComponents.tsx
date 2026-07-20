import { lazy } from 'react'

export const LandingRoute = lazy(async () =>
  import('@/pages/landing').then((module) => ({
    default: module.LandingPage,
  })),
)
