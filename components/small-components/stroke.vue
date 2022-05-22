<template>
  <div class="stroke py-5" :class="{ 'stroke--blue': isBlue }">
    <div class="content-wrapper">
      <div v-if="title" class="text-center mb-4">
        <h3 class="stroke__title">{{ title }}</h3>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    isBlue: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.stroke {
  background: #fff;

  &__title {
    font-size: 28px;
  }

  &--blue {
    background: aliceblue;
  }
}
</style>
