import type { Media } from '@/entities/media';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description?: string;
  image: Media;
  price?: string;
  advantages?: string[];
  isVisible: boolean;
  order: number;
}