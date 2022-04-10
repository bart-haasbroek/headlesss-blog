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

//todo
// button stylen
// globaal dingen opzetten
// Toc
// pagination
// interne links
// turbo snippets
// page not exist --> 404
// faq page
// image optimizer
// amp pages
// mail uitzoeken

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
      return this.$store.getters.getPageBySlug(this.$route.params.slug);
    },
  },
});
</script>

<style lang="scss"></style>
