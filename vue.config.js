module.exports = {
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false, // 자동으로 open하지 않음
      analyzerMode: 'static' /* 분석파일 html 보고서를 dist 폴더에 저장한다  */,
      reportFilename: 'manbalboy-bundle-report.html', // 리포트이름
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY_URL, // 'http://dpms.openobject.net:4003', // this configuration needs to correspond to the Spring Boot backends' application.properties server.port
        changeOrigin: true,
      },
    },
    disableHostCheck: true,
  },
};
