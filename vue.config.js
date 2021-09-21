module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g)(\?.*)?$/)
      .use('url-loader')
      .loader('file-loader')
      .tap(options => {
        options.name = 'img/[name].[ext]'
        return options
      })
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/variables.scss"; @import "~@/assets/scss/fonts.scss";',
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'fr',
      localeDir: 'assets/locales',
      enableInSFC: false,
    },
  },
}
