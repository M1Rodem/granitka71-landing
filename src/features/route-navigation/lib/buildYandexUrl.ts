import type { ContactLocation } from '@/entities/contact'

export function buildYandexUrl(location: ContactLocation): string {
  const [lat, lon] = location.coordinates

  return `https://yandex.ru/maps/?rtext=~${lat},${lon}&rtt=auto`
}