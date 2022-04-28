export default {
    siteName: 'Headless blog',
    logo: '/images/placeholder-logo.png',
    hostname: 'https://example123.com',
    googleAnalytics: {
        on: true,
        id: process.env.GOOGLE_ANALYTICS_ID
    },
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