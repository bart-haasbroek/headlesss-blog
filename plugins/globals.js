import SiteConfig from '~/config/_siteConfig'

export default (_, inject) => {
  inject('siteConfig', SiteConfig)
}
