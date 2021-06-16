export default {
  target: 'static',
  head: {
    title: 'Min Li | Graphic Designer | Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Rubik:ital,wght@0,400;0,500;0,700;0,800;1,700&display=swap' },
    ]
  },
  components: true,
  modules: [
    '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: process.env.NUXT_ENV_PRISMIC_ENDPOINT,
    apiOptions: { accessToken: process.env.NUXT_ENV_PRISMIC_TOKEN },
    preview: false
  }
}
