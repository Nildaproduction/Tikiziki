// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/store/:path*',
        destination: 'https://tikizikike.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
