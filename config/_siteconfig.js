
// const apiEndpoint = 'https://www.apibase.ga/learntodraw';
const apiEndpoint = 'http://localhost:8888/headless';

export default {
    siteName: 'Headless blog',
    logo: '/images/placeholder-logo.png',
    hostname: 'https://example123.com',
    apiEndpoint: apiEndpoint,
    googleAnalytics: {
        on: true,
        id: process.env.GOOGLE_ANALYTICS_ID
    },
    contentModules: [
      {
        title: 'page',
        routeName: '',
        endpoint: `${apiEndpoint}/wp-json/wp/v2/pages`,
        storeKey: 'pages'
      },
      {
        title: 'post',
        routeName: 'berichten',
        endpoint: `${apiEndpoint}/wp-json/wp/v2/posts?per_page=3`,
        storeKey: 'posts'
      },
      {
        title: 'knowledgebank',
        routeName: 'kennisbank',
        endpoint: `${apiEndpoint}/wp-json/wp/v2/knowledgebank`,
        storeKey: 'knowledgebank'
      },
      {
        title: 'categorieen',
        routeName: 'categorieen',
        endpoint: `${apiEndpoint}/wp-json/wp/v2/categories`,
        storeKey: 'categories'
      },
      {
        title: 'kennisbank categorieen',
        routeName: 'kennisbank categorieen',
        endpoint: `${apiEndpoint}/wp-json/wp/v2/knowledgebank_categories`,
        storeKey: 'knowledgeBankCategories'
      },
    ],
    mainMenu: [
        {
          url: "/",
          title: "Home",
          icon: "house-door",
        },
        {
          url: "/berichten",
          title: "Berichten",
          icon: "house-door",
        },
        {
          url: "/kennisbank",
          title: "Kennisbank",
          icon: "house-door",
        },
    ],
}