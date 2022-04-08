<template>
  <main>
    <div class="layout-wrapper">
      <div
        class="top-bar d-flex hide-sm w-100 content-wrapper align-items-center"
      >
        <div class="logo"></div>
        <div class="d-flex justify-content-end flex-grow-1">
          <nav class="navigation">
            <ul>
              <li v-for="(menuItem, index) in menu" :key="index">
                <nuxtLink :to="menuItem.url">
                  {{ menuItem.title }}
                </nuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="mobile-bar hide-md w-100">
        <div class="mobile-bar__inner d-flex align-items-center">
          <div class="logo"></div>
          <div class="d-flex flex-grow-1 justify-content-end">
            <div class="hamburger" @click="toggleMenu()">
              <div class="hamburger-center"></div>
            </div>
          </div>
        </div>

        <div class="mobile-navigation" v-if="menuIsOpen">
          <ul>
            <li v-for="(menuItem, index) in menu" :key="index">
              <nuxtLink :to="menuItem.url">
                {{ menuItem.title }}
              </nuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <Nuxt />
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      console.log("sddsds");
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
  data() {
    return {
      menuIsOpen: false,
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
};
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
}

.layout-wrapper {
  height: 100vh;
  grid-template-rows: auto 1fr;
  display: grid;
}

.mobile-bar {
  position: fixed;
  z-index: 99;
  background: #d1d1d1;

  &__inner {
    padding: 7px 20px;
    box-shadow: 0px 1px 3px;
    position: relative;
  }
}

.mobile-navigation {
  max-height: 70vh;
  overflow-y: scroll;
  box-shadow: 0px 1px 3px;
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      + li {
        border-top: 1px solid #efefef;
      }
      a {
        padding: 12px 22px;
        display: block;
        color: #1d1d1d;
        transition: all 0.4s ease;

        &:hover {
          text-decoration: none;
          background: #efefef;
        }
      }
    }
  }
}

.hamburger {
  width: 28px;
  height: 25px;
  position: relative;

  &:before,
  &:after,
  .hamburger-center {
    height: 5px;
    background: #1d1d1d;
    content: "";
    position: absolute;
    width: 100%;
  }

  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  .hamburger-center {
    top: 50%;
    transform: translateY(-50%);
  }
}

.top-bar {
  padding-top: 16px;
  padding-bottom: 16px;
}

.logo {
  width: 50px;
  height: 50px;
  background: red;
}

.navigation {
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      a {
        display: block;
        padding: 10px 10px;
        border-radius: 4px;
        transition: all 0.4s ease;
        color: #1d1d1d;

        &:hover {
          background: #1d1d1d;
          color: white;
          text-decoration: none;
        }
      }
    }
    li + li {
      margin-left: 20px;
    }
  }
}

.page-wrapper {
  width: 100%;
  padding-bottom: 20px;
}
</style>
