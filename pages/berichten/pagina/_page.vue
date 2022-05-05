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
import { buildSeoHead } from "../../../helpers/build-seo-head";
import _siteconfig from "../../../config/_siteconfig";
import axios from "axios";

const baseApiEndpoint = _siteconfig.contentModules[1].endpoint;
export default Vue.extend({
  head() {
    return buildSeoHead(this.pageContent);
  },
  computed: {
    ...mapGetters({
      categories: "getCategories",
    }),
    pageContent() {
      return this.$store.getters.getPageBySlug("berichten");
    },
  },
  async asyncData({ params }) {
    const apiEndpoint = `${baseApiEndpoint}&page=${params.page}`;
    console.log("apiEndpoint", apiEndpoint);

    const res = await axios.get(apiEndpoint);
    const posts = res.data;
    console.log("params.page", params.page);
    return { posts };
  },
});
</script>

<style lang="scss">
.category-link {
  padding: 3px 0;
  display: block;
}
</style>
