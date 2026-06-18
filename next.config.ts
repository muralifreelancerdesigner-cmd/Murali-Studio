import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Core framework speed optimizations */
  reactStrictMode: true,
  poweredByHeader: false, // Increases security by hiding framework signatures

  images: {
    // Enable advanced webp/avif image compression optimization thresholds
    formats: ['image/avif', 'image/webp'],
    // Protects your system by explicitly specifying secure media CDNs
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
