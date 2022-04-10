<template>
  <main>
    <div class="layout-wrapper">
      <div
        class="top-bar d-flex hide-sm w-100 content-wrapper align-items-center"
      >
        <div class="logo">
          <nuxt-img :src="$siteConfig.logo" quality="75" />
        </div>
        <div class="d-flex justify-content-end flex-grow-1">
          <main-navigation :menuItems="menu"></main-navigation>
        </div>
      </div>
      <mobile-navigation
        class="hide-md"
        :menuItems="menu"
        :menuIsOpen="menuIsOpen"
        @onMenuClick="toggleMenu"
      ></mobile-navigation>
      <Nuxt />
      <footer class="footer">footer hier</footer>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
  data($siteConfig) {
    return {
      menuIsOpen: false,
      menu: this.$siteConfig.mainMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 50px;
  background: var(--color-dark);
}
.logo {
  width: 50px;
  height: 50px;
  background: red;
}

.layout-wrapper {
  height: 100vh;
  grid-template-rows: auto 1fr;
  display: grid;

  @media only screen and (max-width: 767px) {
    padding-top: 64px;
  }
}

.top-bar {
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
