import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Gajendra_Singh' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
