/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { 
        protocol: 'https', 
        hostname: '://unsplash.com', 
        pathname: '/**' 
      },
      { 
        protocol: 'https', 
        hostname: '://youtube.com', 
        pathname: '/**' 
      }
    ],
  },
};

module.exports = nextConfig;
