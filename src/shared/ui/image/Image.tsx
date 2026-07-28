import { forwardRef } from 'react'
import { buildSrcSet } from '@/shared/lib/image'
import type { ImageComponentProps } from '@/shared/lib/image/types'
import styles from './Image.module.css'

export type ImageProps = ImageComponentProps

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  function Image(
    {
      image,
      className,
      fit = 'cover',
      radius = 'none',
      ...props
    },
    ref
  ) {
    const { formats, alt, width, height, aspectRatio, sizes, loading, fetchPriority } = image

    const classes = [
      styles.image,
      styles[`fit-${fit}`],
      radius !== 'none' && styles[`radius-${radius}`],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <picture>
        <source
          type="image/avif"
          srcSet={buildSrcSet(formats.avif)}
          sizes={sizes || '100vw'}
        />
        <source
          srcSet={buildSrcSet(formats.fallback)}
          sizes={sizes || '100vw'}
        />

        <img
          ref={ref}
          src={formats.fallback[0]?.src || ''}
          alt={alt}
          className={classes}
          style={{ aspectRatio }}
          width={width}
          height={height}
          loading={loading || 'lazy'}
          fetchPriority={fetchPriority || 'auto'}
          {...props}
        />
      </picture>
    )
  }
)

Image.displayName = 'Image'