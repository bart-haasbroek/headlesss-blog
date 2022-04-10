export default {
    siteName: 'Headless blog',
    logo: '/images/flamingo-spullen-logo1.png', // 'logo-component', // or '/logo.svg' for regular image
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
        {
          url: "/over-ons",
          title: "Over de app",
          icon: "info-circle",
        },
    ],
}