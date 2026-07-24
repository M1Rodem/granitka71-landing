import {
  ScrollText,
  Brush,
  Hammer,
  Leaf,
  Shovel,
  type LucideIcon,
} from 'lucide-react'

interface ServiceIconProps {
  title: string
  size?: number
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  'Гравировка': Brush,
  'Реставрация': Hammer,
  'Озеленение': Leaf,
  'Уборка': Shovel,
}

export function ServiceIcon({ title, size = 20, className }: ServiceIconProps) {
  const Icon = iconMap[title] || ScrollText
  return <Icon size={size} className={className} />
}