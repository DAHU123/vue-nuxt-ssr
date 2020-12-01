export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '真是醉了',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~assets/css/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '~/plugins/vue-inject.js',
    '~/plugins/ctx-inject.js',
    '~/plugins/combined-inject.js',
    { src: '~/plugins/vue-notifications', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true, //开启代理转发
  },

  // 代理转发
  proxy: {
    '/edu-cms-web-api': {
      target: 'https://api.hetaobiancheng.com',
    },
  },

  styleResources: {
    scss: '~assets/css/main.scss'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true,
    transpile: [/^element-ui/],
    extend(config, ctx) {
      // Run ESLint on save
      console.log(ctx);
      if (ctx.isDev && ctx.isClient) {
        config.devtool = '#source-map'
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
