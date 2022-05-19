<template>
  <div class="page-wrapper">
    <page-header v-if="headerImage" :image="headerImage"></page-header>
    <div class="content-wrapper content-wrapper--narrow page-content">
      <breadcrumbs></breadcrumbs>
      <smart-content :html="pageContent.content.rendered"></smart-content>
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
    pageContent() {
      return this.$store.getters.getKnowledgebankBySlug(
        this.$route.params.slug
      );
    },
    headerImage() {
      return this.pageContent?.featured_image_url;
    },
  },
});
</script>

<style lang="scss"></style>
