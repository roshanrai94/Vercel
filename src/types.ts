export interface Venture {
  id: string;
  name: string;
  tagline: string;
  est: string;
  description: string;
  highlights: string[];
  visuals: {
    slotKey: string;
    title: string;
    caption: string;
  }[];
}

export interface Accolade {
  id: string;
  title: string;
  location: string;
  date: string;
}

export interface PublicSpeaking {
  role: 'GUEST SPEAKER' | 'RESOURCE PERSON' | 'MOTIVATIONAL SPEAKER' | 'MASTER INSTRUCTOR';
  event: string;
  location: string;
}

export interface ChronicleItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface EditorialItem {
  id: string;
  title: string;
  category: string;
  photoKey: string;
}

export interface Endorsement {
  id: string;
  title: string;
  quote?: string;
  author?: string;
  photoKey: string;
}

export type MediaCategory = 'all' | 'report' | 'interview' | 'music_video' | 'feature';

export interface MediaFeature {
  id: string;
  title: string;
  category: 'report' | 'interview' | 'music_video' | 'feature';
  sourceName: string;
  publishedDate?: string;
  description: string;
  url: string;
  thumbnail?: string;
  tags?: string[];
  featured?: boolean;
}

export interface PhotoSlotConfig {
  path?: string;
  dataUrl?: string;
  alt: string;
  label: string;
  recommendedSize: string;
}

export interface PhotoMapping {
  [key: string]: PhotoSlotConfig;
}
