<template>
  <div class="app-card" :class="{ 'no-padding': noPadding }">
    <div class="app-card__title">
      <h4 v-if="title">{{ title }}</h4>
    </div>
    <div class="app-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.app-card {
  &__title {
    margin-bottom: 16px;
  }
  &__content {
    padding: 8px 14px;
    border-radius: 20px;
    background: var(--color-light);
    // box-shadow: 0px 0px 10px 3px rgb(0 0 0 / 7%);
  }

  &.no-padding {
    .app-card__content {
      padding: 0;
    }
  }
}
</style>
