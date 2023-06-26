/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**', // This allows any path on the domain
      },
    ],
    domains: ['files.stripe.com']
  },
}

module.exports = nextConfig
