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

export default Vue.extend({
  head() {
    return {
      title: this.currentCategory.yoast_head_json.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.currentCategory.yoast_head_json.description,
        },
      ],
    };
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
