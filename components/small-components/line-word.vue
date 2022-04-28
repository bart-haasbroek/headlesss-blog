<template>
  <div class="line-word">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
$wordSpace: 15px;
$background: #dfdfdf;

.line-word {
  position: relative;
  text-align: center;

  span {
    padding: 0 $wordSpace;
    background: $background;
    position: relative;
  }

  &:before {
    content: "";
    height: 1px;
    position: absolute;
    top: 13px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 50px);
    width: 100%;
    background: var(--color-dark);
    display: block;
  }
}
</style>
