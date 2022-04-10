<template>
  <div class="page-wrapper">
    <page-header
      :title="pageContent.title.rendered"
      :image="pageContent.featured_image_url"
    ></page-header>
    <div class="content-wrapper page-content--space-top">
      <app-grid :columns="3">
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
import { mapGetters } from "vuex";
export default {
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
    ...mapGetters({
      posts: "getPosts",
    }),
    pageContent() {
      return this.$store.getters.getPageBySlug("home");
    },
  },
};
</script>
