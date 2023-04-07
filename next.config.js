/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
      port: '',
      pathname: '/u/**'
    },
  ]
  }
}

module.exports = nextConfig
