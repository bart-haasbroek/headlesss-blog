
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
        endpoint: `${apiEndpoint}/wp-json/wp/v2/posts`,
        storeKey: 'posts',
        per_page: 20
      },
      {
        title: 'knowledgebank',
        routeName: 'kennisbank',
        endpoint: `${apiEndpoint}/wp-json/wp/v2/knowledgebank`,
        storeKey: 'knowledgebank',
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
          url: "/berichten/pagina/1",
          title: "Blog",
          icon: "house-door",
        },
        {
          url: "/kennisbank",
          title: "Woordenlijst",
          icon: "house-door",
        },
        {
          url: "/",
          title: "Reviews",
          icon: "house-door",
        },
        {
          url: "/",
          title: "Downloads",
          icon: "house-door",
        },
        {
          url: "/handig",
          title: "Handig",
          icon: "house-door",
        },
    ],
}