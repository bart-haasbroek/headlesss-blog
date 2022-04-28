<template>
  <div class="page-wrapper">
    <page-header
      :image="pageContent.featured_image_url"
      :title="pageContent.title.rendered"
    ></page-header>
    <div class="content-wrapper content-wrapper--narrow page-content text-big">
      <breadcrumbs></breadcrumbs>
      <!-- <img :src="headerImage" alt="" /> -->
      <!-- <nuxt-img :src="headerImage"></nuxt-img> -->
      <toc :toc="pageContent.toc"></toc>
      <smart-content :html="pageContent.content.rendered"></smart-content>
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
    pageContent() {
      return this.$store.getters.getPostBySlug(this.$route.params.slug);
    },
  },
});
</script>

<style lang="scss"></style>
