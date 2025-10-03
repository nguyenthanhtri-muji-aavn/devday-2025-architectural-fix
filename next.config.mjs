/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com'],
    },
    output: 'standalone',
    experimental: {
        appDir: true
    }
};

export default nextConfig;