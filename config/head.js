import _siteConfig from "./_siteConfig";
export default {
    title: _siteConfig.siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: '' },
      { name: "apple-mobile-web-app-capable", content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }