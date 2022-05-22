<template>
  <div class="page-wrapper">
    <page-header
      :title="pageContent.title.rendered"
      payoffText="Alle woorden en termen bij elkaar wat te maken heeft met pro create en design"
    ></page-header>
    <div class="content-wrapper page-content--space-top">
      <app-grid columns="3">
        <app-card v-for="(category, index) in categories" :key="index">
          <h4>
            <NuxtLink
              :to="{
                name: 'kennisbank-categorieen-category',
                params: { category: category.slug },
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
import { buildSeoHead } from "../../helpers/build-seo-head";
export default Vue.extend({
  head() {
    return buildSeoHead(this.pageContent);
  },
  computed: {
    ...mapGetters({
      categories: "getKnowledgeBankCategories",
    }),
    pageContent() {
      return this.$store.getters.getPageBySlug("kennisbank");
    },
  },
});
</script>

<style lang="scss"></style>
