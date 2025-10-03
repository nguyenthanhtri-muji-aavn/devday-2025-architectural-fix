/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/external/:path*',
        destination:
          'https://devday-aavn-d5284e914439.herokuapp.com/api/:path*',
      },
    ];
  },
  images: {
    domains: ['via.placeholder.com'],
  },
  output: 'standalone',
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
