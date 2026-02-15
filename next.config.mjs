/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
      },
      {
        protocol: "https",
        hostname: "static0.hotcarsimages.com",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },
      {
        protocol: "https",
        hostname: "c8.alamy.com",
      },
    ],
    formats: ["image/avif", "image/webp"], // modern fast formats
    minimumCacheTTL: 60, // better caching
  },
  reactCompiler: true,
};

export default nextConfig;
