/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["jesusthegoodshepherd.org"],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
