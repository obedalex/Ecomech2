import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      // ✅ Correct key
      root: process.cwd(),
    },
  },
};

export default nextConfig;
