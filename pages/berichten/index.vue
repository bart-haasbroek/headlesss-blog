<template>
  <div class="page-wrapper" v-if="pageContent">
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
        <div>
          <app-card title="Categorieen">
            <div class="category-list">
              <ul class="nav-list">
                <li v-for="(category, index) in categories" :key="index">
                  <NuxtLink
                    class="category-link"
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
          </app-card>
        </div>
      </app-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { buildSeoHead } from "../../helpers/build-seo-head";

export default Vue.extend({
  head() {
    return buildSeoHead(this.pageContent);
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
.category-link {
  padding: 3px 0;
  display: block;
}
</style>
