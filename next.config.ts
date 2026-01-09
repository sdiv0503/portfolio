import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // You likely already have this
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // <--- ADD THIS
      },
    ],
  },
};

export default nextConfig;