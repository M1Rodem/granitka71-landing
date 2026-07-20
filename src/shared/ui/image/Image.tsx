import type { CSSProperties, ImgHTMLAttributes } from 'react'

import styles from './Image.module.css'

type ImageFit = 'cover' | 'contain'
type ImageRadius = 'none' | 'sm' | 'md' | 'lg'

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  alt: string
  aspectRatio?: string
  fit?: ImageFit
  height: number
  radius?: ImageRadius
  width: number
}

export function Image({
  alt,
  aspectRatio,
  className,
  fit = 'cover',
  height,
  loading = 'lazy',
  radius = 'md',
  width,
  ...props
}: ImageProps) {
  const classes = [
    styles.image,
    styles[`fit-${fit}`],
    styles[`radius-${radius}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const style = {
    aspectRatio: aspectRatio ?? `${width} / ${height}`,
  } satisfies CSSProperties

  return (
    <img
      alt={alt}
      className={classes}
      decoding="async"
      height={height}
      loading={loading}
      style={style}
      width={width}
      {...props}
    />
  )
}
