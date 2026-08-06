import { type ImgHTMLAttributes } from 'react'

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: 'vk' | 'telegram' | 'whatsapp' | 'max'
  size?: number
}

const iconPaths = {
  vk: '/icons/vk.svg',
  telegram: '/icons/telegram.svg',
  whatsapp: '/icons/whatsapp.svg',
  max: '/icons/max.svg',
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  return (
    <img
      src={iconPaths[name]}
      alt={name}
      width={size}
      height={size}
      className={className}
      {...props}
    />
  )
}