module.exports = {
  transpileDependencies: ['vuetify'],
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
