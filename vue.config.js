module.exports = {
  // 배포 root 값 수정
  publicPath: process.env.NODE_ENV === 'production'
        ? '/wedding'
        : '/',
  outputDir: 'docs',

  // chainWebpack: config => config.optimization.minimization([new UglifyJsPlugin({
  //   uglifyOptions: {
  //     output: {
  //       comments: /\<\/?fs_premium_only\>/i
  //     }
  //   }
  // })]),

  // css variables 공통 변수 삽입
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/css/variables.scss";
        `
      }
    }
  }
}