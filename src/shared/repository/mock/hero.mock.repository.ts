import type { HeroRepository } from '../interfaces/hero.repository'
import type { HeroData } from '@/entities/hero'
import heroImage from '@/shared/assets/images/hero/hero-workshop.webp'

const heroMock: HeroData = {
  eyebrow: 'Гранитка71 — изготовление памятников',

  title:
    'Изготовление памятников высокого качества',

  highlightedTitle:
    'с уважением к каждой детали',

  subtitle:
    'Создаем мемориальные комплексы из натурального камня, сохраняя память поколений. Индивидуальный подход, качественные материалы и профессиональное исполнение.',

  image: heroImage,

  advantages: [
    {
      value: '15+',
      label: 'Лет опыта',
      description:
        'Работаем с гранитом более 15 лет, создавая памятники высокого качества.'
    },
    {
      value: '1000+',
      label: 'реализованных работ',
      description: 'Изготовили и установили более тысячи памятников по индивидуальным проектам.'
    },
    {
      value: '100%',
      label: 'индивидуальный подход',
      description: 'Учитываем пожелания семьи, особенности участка и помогаем на каждом этапе.'
    },
  ],

  primaryAction: {
    label: 'Получить консультацию',
    href: '#contacts',
  },
}


export class MockHeroRepository implements HeroRepository {

  async getHero(): Promise<HeroData> {
    return heroMock
  }

}