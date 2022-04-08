<template>
  <main>
    <nav class="main-navigation hide-sm">
      <tab-bar :menuItems="menu"></tab-bar>
    </nav>
    <div class="layout-wrapper">
      <header class="hide-md">
        <div class="top-bar">
          <b-button
            class="back-button"
            variant="link"
            @click="to"
            v-if="$nuxt.$route.path !== '/'"
          >
            <b-icon class="icon" icon="arrow-left" />
            Terug
          </b-button>
          <p class="page-title">
            {{ $store.state.app.pageTitle }}
          </p>
        </div>
      </header>
      <Nuxt />
      <footer class="mobile-footer show-sm">
        <tab-bar :menuItems="menu"></tab-bar>
      </footer>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      menu: [
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
    };
  },
  methods: {
    to() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
}

header {
  height: calc(55px + env(safe-area-inset-top));
  background: #ccc;
  padding-top: env(safe-area-inset-top);
}

.top-bar {
  display: flex;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
}
.page-title:first-letter {
  text-transform: capitalize;
}

.back-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-decoration: none;
  left: 0;
  .icon {
    position: relative;
    top: 2px;
  }
  &:focus {
    outline: none;
  }
}

.layout-wrapper {
  height: 100vh;
  grid-template-rows: auto 1fr;
  display: grid;
}

.page-wrapper {
  width: 100%;
  padding-bottom: 20px;
  overflow-y: scroll;
}

.content-wrapper {
  padding-top: 20px;
}

.main-navigation {
  height: 100%;
  padding: 0 10px;
  padding-top: 20px;
  background: #ccc;
}

.mobile-footer {
  height: calc(50px + env(safe-area-inset-bottom));
  background: #ccc;
  padding: 0 10px;
}

@media only screen and (min-width: 767px) {
  main {
    height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .page-wrapper {
    margin: 0 auto;
  }
}
</style>
