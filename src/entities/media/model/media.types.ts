export interface Media {
  id: string;

  url: string;

  alt?: string;

  width?: number;

  height?: number;

  size?: number;

  type:
    | 'image'
    | 'video';
}