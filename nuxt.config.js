module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-notifications']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],

  plugins: [
    '~/plugins/vue-notifications'
  ],
  router: {
    extendRoutes(routes, resolve){
      routes.push(
        {
          name: 'hot',
          path: '/hot',
          component: resolve(__dirname, 'pages/posts/index.vue')
        },
        {
          name: 'halloffame',
          path: '/halloffame',
          component: resolve(__dirname, 'pages/posts/index.vue')
        },
        {
          name: 'glob',
          path: '/glob',
          component: resolve(__dirname, 'pages/posts/index.vue')
        },
        {
          name: 'feed',
          path: '/feed',
          component: resolve(__dirname, 'pages/posts/index.vue')
        }
      )
    }
  },
  env: {
    envKey: process.env.TEST_MESSAGE || 'envValue'
  }
}
