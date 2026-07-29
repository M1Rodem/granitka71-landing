import type { ContactLocation } from '@/entities/contact'

export function build2GisUrl(
  location: ContactLocation,
): string {
  const [lat, lon] = location.coordinates

  return `https://2gis.ru/directions/tab/car/points/|${lon},${lat};${location.twoGis.objectId}`
}