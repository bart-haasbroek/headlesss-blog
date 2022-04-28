import siteConfig from './_siteConfig';

let axiosSettings = {
    baseURL: '/',
}

const imagesSettings = {
    screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1536
    },
    domains: [
        'http://localhost',
        'http://localhost:8888',
        'http://localhost:8888/',
        'http://localhost:8888/headless/',
        'https://apibase.ga/'
    ]
}

export const modules = [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    'bootstrap-vue/nuxt'
  ]
  if (siteConfig.googleAnalytics.on && siteConfig.googleAnalytics.id) {
    modules.push('@nuxtjs/google-gtag')
  }

  export const modulesSettings = {
    axios: axiosSettings,
    bootstrapVue: {
        icons: true,
    },
    image: imagesSettings,
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    sitemap: {
        hostname: siteConfig.hostname,
    },
    'google-gtag': {
      id: siteConfig.googleAnalytics.id
    }
  }