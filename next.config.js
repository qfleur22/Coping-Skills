/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',
  
  // Disable features not supported in static export
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

