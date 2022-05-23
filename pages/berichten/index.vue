<template>
  <div class="page-wrapper" v-if="pageContent">
    <page-header :title="'Creative blog'">
      <p class="header-text">
        Waar nieuwe dingen worden geleerd, inspiratie wordt opgedaan en de beste
        tips worden gegeven
      </p>
    </page-header>
    <div class="content-wrapper page-content">
      <breadcrumbs></breadcrumbs>
      hier: {{ $route.query.page }}
      <nuxt-link :to="{ name: 'berichten', query: { page: '2' } }"
        >pagina 2</nuxt-link
      >
      <nuxt-link :to="{ name: 'berichten' }">terug</nuxt-link>
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
import _siteconfig from "../../config/_siteconfig";
import axios from "axios";
const baseApiEndpoint = _siteconfig.contentModules[1].endpoint;

export default Vue.extend({
  head() {
    return buildSeoHead(this.pageContent);
  },
  middleware({ redirect }) {
    return redirect("301", "/berichten/pagina/1");
  },
  computed: {
    ...mapGetters({
      // pageOnePosts: "getPosts",
      // posts: "getPosts",
      categories: "getCategories",
    }),
    pageContent() {
      return this.$store.getters.getPageBySlug("berichten");
    },
  },
  watchQuery: ["page"],
  watch: {
    $route: async function () {
      console.log("dsdssd", this.$route.query["page"]);
      if (!!this.$route.query["page"]) {
        const apiEndpoint = `${baseApiEndpoint}&page=${this.$route.query.page}`;
        console.log("apiEndpoint", apiEndpoint);
        const res = await axios.get(apiEndpoint);
        this.posts = res.data;
        console.log("jaaaaa");
      } else {
        this.posts = this.$store.getters.getPosts;
      }
      // if (!!this.$route.query["page"]) {
      //   const apiEndpoint = `${baseApiEndpoint}&page=${query.page}`;
      //   console.log("apiEndpoint", apiEndpoint);
      //   const res = await axios.get(apiEndpoint);
      //   this.posts = res.data;
      // } else {
      //   this.posts = this.$store.getters.getPosts;
      // }
    },
  },
  async asyncData({ query, store }) {
    let posts = store.getters.getPosts;
    console.log("quesddsry", query);

    if (!!query["page"]) {
      const apiEndpoint = `${baseApiEndpoint}&page=${query.page}`;
      const res = await axios.get(apiEndpoint);
      posts = res.data;
    }
    // console.log("pageOnePosts", pageOnePosts);

    //console.log("dssdquery", query["page"]);
    // if (!!this.$route.query["page"]) {
    //   console.log("dsds");
    //   const apiEndpoint = `${baseApiEndpoint}&page=${this.$route.query.page}`;
    //   const res = await axios.get(apiEndpoint);
    //   this.posts = res.data;
    // } else {
    //   console.log("setten", this.pageOnePosts);
    //   this.posts = this.pageOnePosts;
    // }

    // if (!query["page"]) {
    //   return;
    // }
    // console.log("query.page", query.page);
    // const apiEndpoint = `${baseApiEndpoint}&page=${query.page}`;
    // console.log("apiEndpoint", apiEndpoint);

    // const res = await axios.get(apiEndpoint);
    // const posts = res.data;
    return { posts: posts };
  },
  // watchQuery(newQuery, oldQuery) {
  //   console.log("newQuery", newQuery, oldQuery);
  //   console.log("newQuery.foo && oldQuery.bar", newQuery.foo && oldQuery.bar);
  //   return true;
  //   // Only execute component methods if the old query string contained `bar`
  //   // and the new query string contains `foo`
  //   return newQuery.foo && oldQuery.bar;
  // },
  // watch: {
  //   "$route.query": "$fetch",
  // },
  // async fetch() {
  //   if (!!this.$route.query["page"]) {
  //     const apiEndpoint = `${baseApiEndpoint}&page=${this.$route.query.page}`;
  //     const res = await axios.get(apiEndpoint);
  //     this.posts = res.data;
  //   } else {
  //     this.posts = this.pageOnePosts;
  //   }
  // },
  //   data() {
  //   return {
  //     posts: [],
  //   };
  // },
});
</script>

<style lang="scss">
.category-link {
  padding: 3px 0;
  display: block;
}
</style>
