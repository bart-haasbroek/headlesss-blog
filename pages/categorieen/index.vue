<template>
  <div class="page-wrapper">
    <div class="content-wrapper page-content">
      <app-grid columns="3">
        <b-card
          no-body
          v-for="(category, index) in categories"
          :key="index"
          :title="category.name"
          class="mb-2 w-100"
        >
          <b-card-body>
            <h4>
              <NuxtLink
                :to="{
                  name: 'categorieen-slug',
                  params: { slug: category.slug },
                }"
              >
                {{ category.name }}
              </NuxtLink>
            </h4>
          </b-card-body>
        </b-card>
      </app-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      categories: "getCategories",
    }),
  },
});
</script>

<style lang="scss"></style>
