import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', 

  images: {
    unoptimized: true,
    minimumCacheTTL: 14400,
    qualities: [75],
  },

  // React Compiler-ai experimental-ukku veliye kondu vanthuvitten
  reactCompiler: true, 

  // Matra experimental features irunthal inge vaiyungal
  experimental: {
    // ppr: true, (Oru vela irunthal)
  },
};

export default nextConfig;