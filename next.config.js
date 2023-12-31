/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'images.unsplash.com','500px.com'
    ]
  },
  module: {
    rules: [{ test: /\.js$|jsx/, use: 'raw-loader' }],
  },
}
