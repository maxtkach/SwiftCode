/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/SwiftCode' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 