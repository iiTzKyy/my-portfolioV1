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
          { name: 'Rizky Febiginta Saputra Portfolio Website', content: 'Portfolio Website' },      
        ],
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
