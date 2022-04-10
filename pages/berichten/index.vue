<template>
  <div class="page-wrapper">
    <page-header :title="pageContent.title.rendered"></page-header>
    <div class="content-wrapper page-content">
      <breadcrumbs></breadcrumbs>
      <app-grid partion="3-1">
        <app-grid>
          <blog-item
            v-for="(post, index) in posts"
            :key="index"
            :item="post"
          ></blog-item>
        </app-grid>
        <div class="category-list">
          Categorieen
          <div>
            <ul>
              <li v-for="(category, index) in categories" :key="index">
                <NuxtLink
                  :to="{
                    name: 'categorieen-slug',
                    params: { slug: category.slug },
                  }"
                >
                  {{ category.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </app-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

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
    ...mapGetters({
      posts: "getPosts",
      categories: "getCategories",
    }),
    pageContent() {
      return this.$store.getters.getPageBySlug("berichten");
    },
  },
});
</script>

<style lang="scss">
.category-list {
  background: #d1d1d1;
  padding: 10px;
  border-radius: 10px;
}
</style>
