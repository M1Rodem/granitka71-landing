export const RouteProvider = {
  TwoGis: '2gis',
  Yandex: 'yandex',
} as const

export type RouteProvider =
  (typeof RouteProvider)[keyof typeof RouteProvider]