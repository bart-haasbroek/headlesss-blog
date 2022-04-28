import { modules, modulesSettings } from './config/modules'
import head from './config/head'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: head,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/globals.js' },
    { src: '~/plugins/preview.client.js' },
    { src: '~/plugins/tooltip.client.js' },
  ],

  generate: {
    fallback: true
  },
  ignorePaths: [
    "/kennisbank"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    { path: '~/components/small-components', extensions: ['vue'] }
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
