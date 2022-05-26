<template>
  <div class="page-wrapper">
    <page-header
      :image="pageContent.featured_image_url"
      :title="pageContent.title.rendered"
    >
      <div>{{ currentDate }} - Bart Haasbroek</div>
      <template #headerBottom>
        <breadcrumbs></breadcrumbs>
      </template>
    </page-header>

    <div
      class="content-wrapper content-wrapper--narrow page-content text-big py-4 page-text"
    >
      <app-card :noPadding="true">
        <div class="page-text__image mb-2">
          <nuxt-img
            v-if="pageContent.featured_image_url"
            :src="pageContent.featured_image_url"
          ></nuxt-img>
        </div>
        <!-- <img :src="headerImage" alt="" /> -->
        <div class="page-text__article px-4 py-4">
          <toc :toc="pageContent.toc"></toc>
          <smart-content :html="pageContent.content.rendered"></smart-content>
        </div>
      </app-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { buildSeoHead } from "../../helpers/build-seo-head";
export default Vue.extend({
  head() {
    return buildSeoHead(this.pageContent);
  },
  computed: {
    pageContent() {
      return this.$store.getters.getPostBySlug(this.$route.params.slug);
    },
    currentDate() {
      const date = new Date(this.pageContent.date);
      return new Intl.DateTimeFormat("nl-NL", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    },
  },
});
</script>

<style lang="scss">
.page-text {
  &__image {
    border-radius: 20px;
    max-height: 400px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  &__article {
    img {
      margin: 0 auto;
      border-radius: 20px;
    }
  }
}
</style>
