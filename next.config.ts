import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    // Skip prerendering for dynamic pages
    ppr: false,
  },
};

export default nextConfig;
