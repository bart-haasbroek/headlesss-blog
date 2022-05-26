<template>
  <div>
    <div class="app-grid__wrapper">
      <div
        class="app-grid"
        :class="['columns-amount-' + columns, 'partion-' + partion]"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      default: 2,
    },
    partion: {
      default: 1,
    },
  },
};
</script>

<style lang="scss">
.app-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 36px;

  &.columns-amount-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  &.columns-amount-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  &.columns-amount-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  &.partion-2-1 {
    grid-template-columns: 2fr 1fr;
  }

  &.partion-3-1 {
    grid-template-columns: 3fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    &.columns-amount-3 {
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
  }

  @media screen and (max-width: 640px) {
    &.columns-amount-2,
    &.columns-amount-3 {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }
}
</style>
