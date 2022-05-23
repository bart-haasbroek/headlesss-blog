import { modules, modulesSettings } from './config/modules'
import head from './config/head'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: head,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/index.scss", 'aos/dist/aos.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/globals.js' },
    { src: '~/plugins/preview.client.js' },
    { src: '~/plugins/tooltip.client.js' },
    { src: '~/plugins/aos.js', ssr: false, mode: 'client' },
  ],

  // router: {
  //   scrollBehavior: async (to, from, savedPosition) => {
  //     if (savedPosition) {
  //       return savedPosition
  //     }

  //     const findEl = async (hash, x) => {
  //       return document.querySelector(hash) ||
  //         new Promise((resolve, reject) => {
  //           if (x > 50) {
  //             return resolve()
  //           }
  //           setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
  //         })
  //     }

  //     if (to.hash) {
  //       let el = await findEl(to.hash);
  //       console.log('el', el, el.offsetTop, el.scrollTop);

  //       if ('scrollBehavior' in document.documentElement.style) {
  //         console.log('jaaa');
  //         return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  //       } else {
  //         console.log('jaaa');
  //         return window.scrollTo(0, el.offsetTop)
  //       }
  //     }

  //     return { x: 0, y: 0 }
  //   }
  // },

  generate: {
    fallback: true,
    routes: ['/berichten/pagina/1']
  },
  ignorePaths: [
    "/kennisbank"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    { path: '~/components/small-components', extensions: ['vue'] },
    { path: '~/components/ui', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '~/modules/generator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: modules,
  ...modulesSettings,

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
