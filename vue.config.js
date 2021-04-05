module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
        ? '/wedding'
        : '/',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/css/variables.scss";
        `
      }
    }
  }
  // css: {
  //   extract: false,
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/assets/css/variables.scss";
  //       `
  //     }
  //   }
  // }
}