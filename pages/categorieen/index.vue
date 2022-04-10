<template>
  <div class="page-wrapper">
    <div class="content-wrapper page-content">
      <page-header title="Categorieën"></page-header>
      <app-grid columns="3">
        <app-card v-for="(category, index) in categories" :key="index">
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
        </app-card>
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
