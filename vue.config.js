module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
        ? '/wedding/'
        : '/',
  outputDir: 'docs'
}