import { Seo } from '@/shared/lib'
import { LandingSection } from '@/widgets/landing-section'

import styles from './landing-page.module.css'

const landingSections = [
  {
    id: 'hero',
    title: 'Hero Placeholder',
    description:
      'Здесь будет главный первый экран. На текущем этапе секция существует только как композиционное место для будущего widget-слоя.',
    tone: 'background',
    variant: 'hero',
  },
  {
    id: 'about',
    title: 'About Placeholder',
    description:
      'Секция подготовлена под будущий блок о компании и может быть заменена на полноценный widget без изменения общей страницы.',
    tone: 'surface',
    variant: 'default',
  },
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
        description="Landing shell Granitka71 с полноценным layout, навигацией, header/footer и placeholder-структурой под будущие бизнес-секции."
        title="Granitka71 — Landing Shell"
      />

      <div className={styles.page}>
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
