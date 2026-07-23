export type AdvantageType = 'experience' | 'projects' | 'quality'

export interface HeroAdvantage {
  type: AdvantageType
  value: string
  label: string
  description: string
}