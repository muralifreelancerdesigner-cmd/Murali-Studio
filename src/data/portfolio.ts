export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  type: 'image' | 'video';
  src: string; // Direct video path, YouTube watch link, or image URL
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Cinematic Brand Story',
    category: 'Video Editing',
    type: 'video',
    src: 'https://youtube.com' // YouTube link example
  },
  {
    id: '2',
    title: 'Commercial Motion Showcase',
    category: 'Visual Design',
    type: 'video',
    src: '/assets/videos/showcase.mp4' // Local hosted video example
  },
  {
    id: '3',
    title: 'Visual Identity System',
    category: 'Branding',
    type: 'image',
    src: 'https://unsplash.com'
  }
];
