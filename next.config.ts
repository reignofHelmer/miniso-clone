import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Practice clone: images are loaded straight from miniso.com.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.miniso.com",
        pathname: "/vancheerfile/images/**",
      },
      {
        protocol: "https",
        hostname: "www.miniso.com",
        pathname: "/en/images/**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
