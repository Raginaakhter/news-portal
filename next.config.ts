// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "fixolyserver.vercel.app",
      "img.freepik.com",
      "i.ibb.co", // এখানে i.ibb.co যোগ করো
    ],
  },
};

export default nextConfig;
