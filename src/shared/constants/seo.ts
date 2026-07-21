import { APP_NAME, APP_URL } from './app'

export const SEO_DEFAULTS = {
  title: APP_NAME,
  description:
    'Коммерческий сайт Гранитка71 с каталогом услуг, визуальной галереей и подготовкой к интеграции с CRM.',
  locale: 'ru_RU',
  type: 'website',
  siteName: APP_NAME,
  baseUrl: APP_URL,
  canonicalPath: '/',
  imageAlt: APP_NAME,
} as const
