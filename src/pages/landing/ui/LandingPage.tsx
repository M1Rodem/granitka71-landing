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
        description="Изготовление памятников из гранита и мрамора в Туле и Киреевске. Полный цикл: от проекта до установки. Благоустройство мест захоронения. 18 лет опыта. Бесплатный выезд и консультация. +7 903 659-02-22"
        title="Гранитка71 — изготовление памятников из гранита и мрамора"
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