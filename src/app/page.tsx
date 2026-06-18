import { Metadata } from 'next';

// Premium SEO Optimization Engine Settings
export const metadata: Metadata = {
  title: 'Murali R. | Premium Video Editor & Visual Designer Portfolio',
  description: 'Crafting high-impact cinematic stories and tailored brand identities for ambitious global systems.',
  openGraph: {
    title: 'Murali R. | Editor & Visual Designer',
    description: 'Explore my premium portfolio featuring cinematic video production and luxury brand design assets.',
    url: 'https://vercel.app',
    siteName: 'Murali Studio Portfolio',
    images: [
      {
        url: 'https://unsplash.com',
        width: 1200,
        height: 630,
        alt: 'Murali Studio Visual Showcase Preview Card',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murali R. | Editor & Visual Designer',
    description: 'Crafting high-impact cinematic stories and tailored brand identities.',
    images: ['https://unsplash.com'],
  },
};
