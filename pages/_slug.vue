<template>
  <div class="page-wrapper">
    <page-header
      :image="pageContent.headerImage"
      :title="pageContent.title.rendered"
    ></page-header>
    <div class="content-wrapper content-wrapper--narrow">
      <!-- <img :src="headerImage" alt="" /> -->
      <!-- <nuxt-img :src="headerImage"></nuxt-img> -->
      <div v-html="pageContent.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

//todo
// cats + tags inside posts
// responsive menu
// kennis bank
// interne links
// popup met links
// pagination
// page not exist --> 404
// faq page

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
