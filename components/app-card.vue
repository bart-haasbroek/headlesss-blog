<template>
  <div class="app-card">
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
  },
};
</script>

<style lang="scss" scoped>
.app-card {
  &__title {
    margin-bottom: 10px;
  }
  &__content {
    padding: 8px 14px;
    border-radius: 10px;
    background: var(--color-light);
    box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.4);
  }
}
</style>
