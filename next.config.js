// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig