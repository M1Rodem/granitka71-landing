import type { ContactLocation } from '@/entities/contact'

import { RouteProvider } from '../model/route-provider'

import { build2GisUrl } from './build2GisUrl'
import { buildYandexUrl } from './buildYandexUrl'

export function openRoute(
  provider: RouteProvider,
  location: ContactLocation,
) {
  const builders = {
    [RouteProvider.TwoGis]: build2GisUrl,
    [RouteProvider.Yandex]: buildYandexUrl,
  }

  const url = builders[provider](location)

  window.open(
    url,
    '_blank',
    'noopener,noreferrer',
  )
}