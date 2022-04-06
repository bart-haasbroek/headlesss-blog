<template>
  <div class="page-wrapper">
    <page-header v-if="headerImage" :image="headerImage"></page-header>
    <div class="content-wrapper content-wrapper--narrow">
      <breadcrumbs></breadcrumbs>
    </div>
    <div class="content-wrapper content-wrapper--narrow">
      <app-grid columns="3">
        <b-card
          no-body
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title.rendered"
          class="mb-2 w-100"
        >
          <b-card-body>
            <h4>
              <NuxtLink
                :to="{ name: 'kennisbank-slug', params: { slug: post.slug } }"
              >
                {{ post.title.rendered }}
              </NuxtLink>
            </h4>
            <div class="card-text" v-html="post.excerpt.rendered"></div>

            <b-button
              :to="{ name: 'kennisbank-slug', params: { slug: post.slug } }"
              nuxt
              variant="primary"
            >
              Lees meer
            </b-button>
          </b-card-body>
        </b-card>
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
      return this.$store.getters.getPostByKnowledgebankCategory(
        this.$route.params.category
      );
    },
    currentCategory() {
      return this.$store.getters.getKnowledgebankCategoryBySlug(
        this.$route.params.category
      );
    },
    headerImage() {
      return this.currentCategory.acf?.knowledgeCategoryImage?.url;
    },
  },
});
</script>

<style lang="scss"></style>
