<template>
  <div class="page-wrapper">
    <page-header
      :image="headerImage"
      :title="currentCategory.name"
    ></page-header>
    <div class="content-wrapper content-wrapper--narrow page-content">
      <breadcrumbs></breadcrumbs>
      <app-grid columns="3">
        <app-card v-for="(post, index) in posts" :key="index">
          <h4>
            <NuxtLink
              :to="{
                name: 'kennisbank-slug',
                params: { slug: post.slug },
              }"
            >
              {{ post.title.rendered }}
            </NuxtLink>
          </h4>
        </app-card>
      </app-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { buildSeoHead } from "../../../helpers/build-seo-head";

export default Vue.extend({
  head() {
    return buildSeoHead(this.pageContent);
  },
  computed: {
    posts() {
      return this.$store.getters.getPostByKnowledgebankCategory(
        this.$route.params.category
      );
    },
    currentCategory() {
      return this.$store.getters.getKnowledgebankCategoryBySlug(
        this.$route.params.category
      );
    },
    headerImage() {
      return this.currentCategory.acf?.knowledgeCategoryImage?.url;
    },
  },
});
</script>

<style lang="scss"></style>
