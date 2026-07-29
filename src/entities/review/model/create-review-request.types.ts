export interface CreateReviewRequest {
  name: string
  phone: string
  title: string
  text: string
  rating: number | null
  image?: File
  consentAccepted: boolean
  captchaToken: string
}