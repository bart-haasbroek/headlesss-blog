<template>
  <form netlify name="contactUs" method="POST" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="vue-tea" />
    <div
      class="subscribe-to-newsletter"
      :class="{ 'subscribe-to-newsletter--column': isColumn }"
    >
      <h3 class="subscribe-to-newsletter__title mb-4 text-center">
        {{ title }}
      </h3>
      <div class="subscribe-to-newsletter__wrapper d-flex">
        <input
          v-model="emailAdddress"
          type="text"
          class="subscribe-to-newsletter__input py-2 px-3"
        />
        <app-button
          class="subscribe-to-newsletter__button"
          :class="{ 'no-radius': isColumn }"
          color="white"
          @click="submit()"
        >
          Inschrijven
        </app-button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      emailAdddress: "",
    };
  },
  props: {
    title: {
      type: String,
    },
    isColumn: {
      type: Boolean,
    },
  },
  methods: {
    submit() {
      this.$emit("submit", this.emailAdddress);
      this.emailAdddress = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe-to-newsletter {
  &__title {
    font-size: 28px;
  }
  &__wrapper {
    max-width: 850px;
    margin: 0 auto;
  }
  &__button:not(.no-radius) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &__input {
    border-radius: 8px 0 0 8px;
    font-size: 18px;
  }
}
.subscribe-to-newsletter--column {
  .subscribe-to-newsletter {
    &__wrapper {
      flex-flow: column;
    }

    &__title {
      font-size: 18px;
    }

    &__input {
      border-radius: 8px;
      margin-bottom: 16px;
    }
  }
}
</style>
