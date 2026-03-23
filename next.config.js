/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/store/:path*',
        destination: 'tikizikike.vercel.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
