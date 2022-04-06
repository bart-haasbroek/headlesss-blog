<template>
  <main>
    <div class="layout-wrapper">
      <Nuxt />
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

.hide-sm {
  display: block;
  @media only screen and (max-width: 767px) {
    display: none;
  }
}

.hide-md {
  @media only screen and (min-width: 767px) {
    display: none;
  }
}

.show-sm {
  display: none;
  @media only screen and (max-width: 767px) {
    display: block;
  }
}
</style>
