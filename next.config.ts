import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Hides framework signature for added security

  images: {
    formats: ['image/avif', 'image/webp'], // Automatic high-speed web compression
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '://unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '://youtube.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
