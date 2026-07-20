import { Helmet } from 'react-helmet-async'

import { SEO_DEFAULTS } from '@/shared/constants'

export interface SeoProps {
  canonical?: string
  description?: string
  image?: string
  imageAlt?: string
  noIndex?: boolean
  title?: string
  type?: 'article' | 'website'
}

function createCanonicalUrl(path: string) {
  return new URL(path, SEO_DEFAULTS.baseUrl).toString()
}

function buildJsonLd(title: string, description: string, canonical: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    description,
    url: canonical,
    inLanguage: 'ru-RU',
  }
}

export function Seo({
  canonical = SEO_DEFAULTS.canonicalPath,
  description = SEO_DEFAULTS.description,
  image,
  imageAlt = SEO_DEFAULTS.imageAlt,
  noIndex = false,
  title = SEO_DEFAULTS.title,
  type = SEO_DEFAULTS.type,
}: SeoProps) {
  const canonicalUrl = createCanonicalUrl(canonical)
  const jsonLd = buildJsonLd(title, description, canonicalUrl)
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow'

  return (
    <Helmet>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={robots} name="robots" />
      <link href={canonicalUrl} rel="canonical" />

      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={type} property="og:type" />
      <meta content={canonicalUrl} property="og:url" />
      <meta content={SEO_DEFAULTS.siteName} property="og:site_name" />
      <meta content={SEO_DEFAULTS.locale} property="og:locale" />
      {image ? <meta content={image} property="og:image" /> : null}
      {image ? <meta content={imageAlt} property="og:image:alt" /> : null}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
