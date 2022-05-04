import _siteconfig from '~/config/_siteconfig'

export default (_, inject) => {
  inject('siteConfig', _siteconfig)
}
