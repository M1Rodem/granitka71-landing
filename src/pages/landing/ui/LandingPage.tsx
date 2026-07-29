import { Seo } from '@/shared/lib'

import { Company } from '@/widgets/company'
import { Hero } from '@/widgets/hero'
import { Services } from '@/widgets/services'
import { WhyChooseUs } from '@/widgets/why-choose-us'
import { Gallery } from '@/widgets/gallery'
import { Reviews } from '@/widgets/reviews'
import { Contacts } from '@/widgets/contacts'

import styles from './landing-page.module.css'

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

        <Services />

        <WhyChooseUs />

        <Gallery />

        <Reviews />

        <Contacts />

      </div>
    </>
  )
}