<template>
  <div class="page-wrapper">
    <page-header :title="currentCategory.name"></page-header>
    <div class="content-wrapper">
      <breadcrumbs></breadcrumbs>
    </div>
    <div class="content-wrapper">
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
                :to="{ name: 'berichten-slug', params: { slug: post.slug } }"
              >
                {{ post.title.rendered }}
              </NuxtLink>
            </h4>
            <p class="card-text">
              {{ post.acf.contentIntro }}
            </p>

            <b-button
              :to="{ name: 'berichten-slug', params: { slug: post.slug } }"
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
      return this.$store.getters.getPostByCategory(this.$route.params.slug);
    },
    currentCategory() {
      return this.$store.getters.getCategorybySlug(this.$route.params.slug);
    },
  },
});
</script>

<style lang="scss"></style>
