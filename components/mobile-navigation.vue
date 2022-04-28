<template>
  <div class="mobile-bar w-100">
    <div class="mobile-bar__inner d-flex align-items-center">
      <div class="logo">
        <nuxt-img
          :src="$siteConfig.logo"
          quality="60"
          alt="featured-image of the current page"
        />
      </div>
      <div class="d-flex flex-grow-1 justify-content-end">
        <div class="hamburger" @click="$emit('onMenuClick')">
          <div class="hamburger-center"></div>
        </div>
      </div>
    </div>

    <div class="mobile-navigation" v-if="menuIsOpen">
      <ul class="nav-list">
        <li v-for="(menuItem, index) in menuItems" :key="index">
          <nuxtLink :to="menuItem.url">
            {{ menuItem.title }}
          </nuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: undefined,
    menuIsOpen: false,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 110px;
}
.mobile-bar {
  top: 0;
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
    li {
      + li {
        border-top: 1px solid #efefef;
      }
      a {
        padding: 12px 22px;
        display: block;
        color: var(--color-dark);
        transition: all 0.4s ease;

        &:hover {
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
    background: var(--color-dark);
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
</style>
