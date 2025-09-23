import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "do40f6yw4fd7i.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "112.217.212.251",
        port: "5310",
        pathname: "/downloads/**",
      },
    ],
  },
};

export default nextConfig;
