
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/validation.js'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', {
      lazy: true,
      loadLanguagesAsync: true,
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        },
        {
          name: 'Azerbaijan',
          code: 'az',
          iso: 'az-AZ',
          file: 'az.js'
        },
      ],
      langDir: 'locales/',
      defaultLocale: 'en',
      fallbackLocale: 'en',
      strategy: 'prefix',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
      },
      rootRedirect: 'en'
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
