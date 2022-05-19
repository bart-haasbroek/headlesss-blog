<template>
  <div class="page-wrapper">
    <page-header
      :image="pageContent.featured_image_url"
      :title="pageContent.title.rendered"
    ></page-header>
    <div class="content-wrapper content-wrapper--narrow">
      <breadcrumbs></breadcrumbs>
      <smart-content :html="pageContent.content.rendered"></smart-content>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { buildSeoHead } from "../helpers/build-seo-head";
//todo
// button stylen
// slider maken
// pagination
// searching
// turbo snippets
// page not exist --> 404
// faq page
// mail uitzoeken
// image optimizer mobile
// amp pages
// Toc stylen
// interne links - voorkomen dat content wordt gereplaced

export default Vue.extend({
  head() {
    return buildSeoHead(this.pageContent);
  },
  computed: {
    pageContent() {
      return this.$store.getters.getPageBySlug(this.$route.params.slug);
    },
  },
});
</script>

<style lang="scss"></style>
