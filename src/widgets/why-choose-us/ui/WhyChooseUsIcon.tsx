import {
  Award,
  Factory,
  Hammer,
  Heart,
  MapPin,
  ShieldCheck,
  Wallet,
} from 'lucide-react'

interface WhyChooseUsIconProps {
  icon: string
  size?: number
  className?: string
}

export function WhyChooseUsIcon({
  icon,
  size = 20,
  className,
}: WhyChooseUsIconProps) {
  switch (icon) {
    case 'heart':
      return <Heart size={size} className={className} />

    case 'factory':
      return <Factory size={size} className={className} />

    case 'shield':
      return <ShieldCheck size={size} className={className} />

    case 'map-pin':
      return <MapPin size={size} className={className} />

    case 'wallet':
      return <Wallet size={size} className={className} />

    case 'award':
      return <Award size={size} className={className} />

    case 'hammer':
      return <Hammer size={size} className={className} />

    default:
      return <ShieldCheck size={size} className={className} />
  }
}