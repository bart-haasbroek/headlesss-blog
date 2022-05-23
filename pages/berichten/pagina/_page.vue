<template>
  <div class="page-wrapper" v-if="pageContent">
    <page-header
      :title="'Creatief blog'"
      payoffText="Waar nieuwe dingen worden geleerd, <br />
        inspiratie wordt opgedaan en de beste tips worden gegeven"
    >
      <template #headerBottom>
        <breadcrumbs :adjustments="breadCrumbsChanges"></breadcrumbs>
      </template>
    </page-header>
    <div class="content-wrapper page-content pt-4">
      <!-- <nuxt-link :to="{ name: 'berichten-pagina-page', params: { page: 1 } }"
        >pagina 1</nuxt-link
      >
      <nuxt-link :to="{ name: 'berichten-pagina-page', params: { page: 2 } }"
        >pagina 2</nuxt-link
      >
      <nuxt-link :to="{ name: 'berichten-pagina-page', params: { page: 3 } }"
        >pagina 3</nuxt-link
      > -->
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
          <app-card>
            <subscribe-to-newsletter
              title="Blijf geïnspireerd!"
              class="mt-2"
              :isColumn="true"
              @submit="subscribe($event)"
            >
            </subscribe-to-newsletter>
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
    posts() {
      return this.$store.getters.getPagedContent(
        "posts",
        this.$route.params.page
      );
    },
    breadCrumbsChanges() {
      const wordToReplace =
        this.$route.params.page === "1"
          ? ""
          : `pagina ${this.$route.params.page}`;
      return [
        {
          word: `pagina/${this.$route.params.page}`,
          replace: wordToReplace,
        },
      ];
    },
  },
});
</script>

<style lang="scss">
.category-link {
  padding: 3px 0;
  display: block;
}

.header-text {
  font-size: 18px;
  font-weight: 600;
}
</style>
