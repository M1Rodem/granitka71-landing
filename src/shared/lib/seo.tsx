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
    '@type': 'Organization',
    name: title,
    description,
    url: canonical,
    inLanguage: 'ru-RU',
    telephone: SEO_DEFAULTS.phone,
    email: SEO_DEFAULTS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Геологов, 13В',
      addressLocality: 'Киреевск',
      addressRegion: 'Тульская область',
      postalCode: '301260',
      addressCountry: 'RU'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SEO_DEFAULTS.phone,
      contactType: 'sales',
      availableLanguage: ['Russian']
    },
    foundingDate: '2008',
    founder: {
      '@type': 'Person',
      name: 'Александр Ли'
    }
  }
}

export function Seo({
  canonical = SEO_DEFAULTS.canonicalPath,
  description = SEO_DEFAULTS.description,
  image = SEO_DEFAULTS.image,
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
      {/* Basic SEO */}
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={SEO_DEFAULTS.keywords} name="keywords" />
      <meta content={robots} name="robots" />
      <link href={canonicalUrl} rel="canonical" />

      {/* Open Graph (для соцсетей) */}
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={type} property="og:type" />
      <meta content={canonicalUrl} property="og:url" />
      <meta content={SEO_DEFAULTS.siteName} property="og:site_name" />
      <meta content={SEO_DEFAULTS.locale} property="og:locale" />
      <meta content={image} property="og:image" />
      <meta content={imageAlt} property="og:image:alt" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />

      {/* JSON-LD (для поисковиков) */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}