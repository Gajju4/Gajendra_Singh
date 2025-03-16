/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Gajendra_Singh' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig; 