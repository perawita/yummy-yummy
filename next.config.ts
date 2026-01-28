import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "demos.creative-tim.com",
        port: "",
        pathname: "/material-kit-pro/**",
      },
      {
        protocol: "https",
        hostname: "material-taillwind-pro-ct-tailwind-team.vercel.app",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
