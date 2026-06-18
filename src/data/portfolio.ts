export interface PortfolioItem {
  id: string;
  type: 'video' | 'image';
  category: 'editing' | 'design' | 'branding';
  src: string;
  title: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    type: "video",
    category: "editing",
    src: "dQw4w9WgXcQ", // YouTube Video ID
    title: "Cinematic Brand Narrative",
    description: "High-impact post-production sequencing featuring continuous visual tracking layouts."
  },
  {
    id: "2",
    type: "image",
    category: "design",
    src: "https://unsplash.com",
    title: "Abstract Visual Packaging",
    description: "Digital layout structure exploring depth parameters and glassmorphism elements."
  },
  {
    id: "3",
    type: "image",
    category: "branding",
    src: "https://unsplash.com",
    title: "Corporate Visual System",
    description: "Comprehensive corporate brand identity framework using high-contrast design tokens."
  }
];
