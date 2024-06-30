/** @type {import('next').NextConfig} */
const nextConfig = {
  //https://images.unsplash.com/
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
