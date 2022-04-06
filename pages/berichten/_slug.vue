<template>
  <div class="page-wrapper">
    <page-header
      :image="pageContent.featured_image_url"
      :title="pageContent.title.rendered"
    ></page-header>
    <div class="content-wrapper content-wrapper--narrow">
      <breadcrumbs></breadcrumbs>
    </div>
    <div class="content-wrapper content-wrapper--narrow">
      <!-- <img :src="headerImage" alt="" /> -->
      <!-- <nuxt-img :src="headerImage"></nuxt-img> -->
      <!-- <toc :toc="pageContent.acf.contentText"></toc> -->
      <smart-content :html="pageContent.acf.contentText"></smart-content>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: this.pageContent.yoast_head_json.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.pageContent.yoast_head_json.description,
        },
      ],
    };
  },
  computed: {
    pageContent() {
      return this.$store.getters.getPostBySlug(this.$route.params.slug);
    },
  },
});
</script>

<style lang="scss"></style>
