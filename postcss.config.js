module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  module: {
    rules: [{ test: /\.js$|jsx/, use: 'raw-loader' }],
  },
}
