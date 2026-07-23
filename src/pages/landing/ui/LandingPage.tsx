import { Seo } from '@/shared/lib'
import { LandingSection } from '@/widgets/landing-section'
import { Hero } from '@/widgets/hero'
import { Company } from '@/widgets/company'

import styles from './landing-page.module.css'

const landingSections = [
  {
    id: 'services',
    title: 'Services Placeholder',
    description:
      'Секция зарезервирована для будущего каталога услуг. Сейчас она проверяет layout, sticky navigation и scroll system.',
    tone: 'background',
    variant: 'default',
  },
  {
    id: 'gallery',
    title: 'Gallery Placeholder',
    description:
      'Здесь позже появится галерея работ. Пока блок нужен как shell-структура для навигации, контейнеров и motion-потока страницы.',
    tone: 'surface',
    variant: 'default',
  },
  {
    id: 'reviews',
    title: 'Reviews Placeholder',
    description:
      'Секция отзывов пока не наполнена контентом и служит только маркером будущего widget-а в landing shell.',
    tone: 'background',
    variant: 'default',
  },
  {
    id: 'contacts',
    title: 'Contacts Placeholder',
    description:
      'Контактный блок будет интегрирован позже. Сейчас сохранена только точка в структуре страницы и якорная навигация.',
    tone: 'surface',
    variant: 'default',
  },
] as const

export function LandingPage() {
  return (
    <>
      <Seo
        canonical="/"
        description="Landing shell Granitka71(Гранитка71) с полноценным layout, навигацией, header/footer и placeholder-структурой под будущие бизнес-секции."
        title="Гранитка71"
      />

      <div className={styles.page}>

        <Hero />

        <Company />

        {landingSections.map((section) => (
          <LandingSection
            description={section.description}
            id={section.id}
            key={section.id}
            title={section.title}
            tone={section.tone}
            variant={section.variant}
          />
        ))}
      </div>
    </>
  )
}
