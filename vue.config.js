module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/variables.scss"; @import "~@/assets/scss/fonts.scss";',
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
