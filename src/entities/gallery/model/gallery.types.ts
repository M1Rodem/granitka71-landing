import type { Media } from '@/entities/media';

export interface GalleryItem {
  id: string;
  title?: string;
  description?: string;
  image: Media;
  category?: string;
  serviceId?: string;
  order: number;
  isVisible: boolean;
}