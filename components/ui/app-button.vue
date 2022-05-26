<template>
  <button :disabled="disabled" @click="$emit('click')" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "error",
          "notification",
          "light",
        ].includes(value);
      },
    },
    type: {
      type: String,
      required: false,
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "error",
          "notification",
          "light",
        ].includes(value);
      },
    },
    display: {
      type: String,
      required: false,
    },
    textAlign: {
      type: String,
      default: "center",
    },
    active: {
      type: Boolean,
      default: false,
    },
    border: {
      type: String,
      default: "clear",
    },
    borderRadius: {
      type: String,
      default: "4px",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    stretch: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: false,
    },
    iconPosition: {
      type: String,
      default: "right",
      validator(value) {
        return ["left", "right"].includes(value);
      },
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  // display: block;
  display: inline-block;
  padding: 10px 20px 12px;
  font-size: 16px;
  // width: 100%;
  border: none;
  border-radius: 12px;
  background: #42d3ec;
  color: white;
  transition: opacity 0.3s ease;

  &:disabled {
    opacity: 0.4;
  }
}
</style>
