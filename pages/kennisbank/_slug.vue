<template>
  <div class="page-wrapper">
    <page-header v-if="headerImage" :image="headerImage"></page-header>
    <div class="content-wrapper content-wrapper--narrow page-content">
      <breadcrumbs></breadcrumbs>
      <div v-html="pageContent.content.rendered"></div>
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
