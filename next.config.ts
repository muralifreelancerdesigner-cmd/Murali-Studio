import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 default is 4 hours (14400s)
    minimumCacheTTL: 14400,
    // Next.js 16 breaking change: Default is [75]. 
    // Explicitly define qualities if you need more.
    qualities: [75],
  },
  // Enable the stable React Compiler for React 19 performance
  reactCompiler: true,
  // Next.js 16 stable Partial Prerendering
  cacheComponents: true,
};

export default nextConfig;
