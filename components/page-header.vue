<template>
  <div class="header" :class="{ 'is-big': isBig }">
    <div class="header__inner" v-if="!noImg">
      <div class="header__title" v-if="title">
        <h1>{{ title }}</h1>
      </div>
      <div class="header__image">
        <img :src="image" alt="" />
        <!-- <nuxt-img :src="image" quality="60" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined,
    },
    isBig: {
      type: Boolean,
      default: false,
    },
    noImg: {
      type: Boolean,
      default: false,
    },
    titleLeft: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: "./images/flamingo-home-bg.jpg",
    },
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  width: 100%;
  background: #ccc;

  h1,
  h2 {
    color: #efefef;
  }

  &.is-big {
    .header__inner {
      height: 350px;
    }
  }

  &__inner {
    height: 250px;
    position: relative;
  }

  &__title {
    height: 100%;
    width: 100%;
    position: relative;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background: var(--color-dark);
      width: 100%;
      height: 100%;
      opacity: 0.7;
    }
  }
}

@media screen and (max-width: 640px) {
  .header {
    &__top {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    &__logo {
      width: 120px;
    }
  }
}
</style>
