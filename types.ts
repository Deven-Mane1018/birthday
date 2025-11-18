
export interface MemoryItem {
  id: number;
  src: string;
  alt: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FutureDream {
  icon: 'plane' | 'home' | 'food' | 'road' | 'stars' | 'heart';
  title: string;
  description: string;
}
