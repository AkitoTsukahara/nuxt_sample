
export default {
  mode: 'universal',
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
    { src: '~assets/css/animate.css' },
    { src: '~assets/css/bootstrap.min.css' },
    { src: '~assets/css/font-awesome.min.css' },
    { src: '~assets/css/magnific-popup.css' },
    { src: '~assets/css/owl.carousel.css' },
    { src: '~assets/css/themify-icons.css' },
    { src: '~assets/css/style.css' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/Components' },
    //{ src: '~plugins/css' },
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
    ['wp-nuxt', {
      endpoint: 'http://localhost:9000/wp-json'
    }],
    // Simple usage
    // 'wp-nuxt',
    //
    // // With options
    // ['wp-nuxt', {
    //   endpoint: 'https://wp.kmr.io/wp-json'
    //   extensions: true // For additional functions of wpapi-extensions
    //   /* other options of WP-API */
    // }],
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
