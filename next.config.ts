import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Skip prerendering for dynamic pages
    ppr: false,
  },
};

export default nextConfig;
