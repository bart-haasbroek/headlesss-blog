<template>
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
        placeholder="je emailadres"
        type="email"
        class="subscribe-to-newsletter__input py-2 px-3"
      />
      <app-button
        :disabled="!emailAdddress"
        class="subscribe-to-newsletter__button"
        :class="{ 'no-radius': isColumn }"
        color="white"
        @click="submit()"
      >
        Inschrijven
      </app-button>
    </div>
    <div class="text-center mt-3" v-if="successMessage">
      {{ successMessage }}
    </div>
    <div class="text-center mt-3" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      emailAdddress: "",
      successMessage: "",
      errorMessage: "",
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
    async submit() {
      const validEmail = !!this.validateEmail(this.emailAdddress);
      if (validEmail) {
        const { data } = await axios.get(
          "http://localhost:8888/api/post-to-airtable?email=" +
            this.emailAdddress
        );
        if (data === "success") {
          this.emailAdddress = "";
          this.successMessage = "Het inschrijven is gelukt! Bedankt";

          setTimeout(() => {
            this.successMessage = "";
          }, 3000);
        }
      } else {
        this.errorMessage = "Dit is geen geldig email adres";
        setTimeout(() => {
          this.errorMessage = "";
        }, 3000);
      }
    },
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
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
      font-size: 14px;
    }
  }
}
</style>
