import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ For PHP to work, don't use output: 'export'
  // If you have this, comment it out:
  // output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  
  // ✅ Add rewrites to handle PHP files
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: '/send-mail.php',
      },
    ];
  },
};

export default nextConfig;