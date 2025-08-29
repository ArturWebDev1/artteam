import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/artteam',
  assetPrefix: '/artteam/',
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;
