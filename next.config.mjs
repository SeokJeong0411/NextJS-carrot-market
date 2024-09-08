/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ac-p2.namu.la",
      },
    ],
  },
};

export default nextConfig;
