import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', 
        port:''
      }
    ],
    domains: []
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
