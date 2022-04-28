<template>
  <div class="page-wrapper">
    <page-header :title="'Categorie: ' + currentCategory.name"></page-header>

    <div class="content-wrapper page-content">
      <breadcrumbs></breadcrumbs>
      <app-grid columns="3">
        <blog-item
          v-for="(post, index) in posts"
          :key="index"
          :item="post"
        ></blog-item>
      </app-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { buildSeoHead } from "../../helpers/build-seo-head";

export default Vue.extend({
  head() {
    return buildSeoHead(this.pageContent);
  },
  computed: {
    posts() {
      return this.$store.getters.getPostByCategory(this.$route.params.slug);
    },
    currentCategory() {
      return this.$store.getters.getCategorybySlug(this.$route.params.slug);
    },
  },
});
</script>

<style lang="scss"></style>
