// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
      pageTransition:{
        name:'page', mode:'out-in'
      },
      head:{
        charset: 'utf-8',      
        viewport:'width=device-width, initial-scale=1',      
        title: 'RizkyFs Portfolio',      
        meta: [
          { name: 'RizkyFS Portfolio Website', content: 'Portfolio Website' },{ charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'RizkyFs Portfolio Website' }      
        ],
        link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      }
    },
    modules:[
        '@nuxt/image-edge','@nuxt/content','nuxt-icon'
    ],

    css: ['~/assets/css/main.css'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
