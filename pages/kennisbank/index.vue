<template>
  <div class="page-wrapper">
    <page-header :title="pageContent.title.rendered"></page-header>
    <div class="content-wrapper page-content--space-top">
      <app-grid columns="3">
        <app-card v-for="(category, index) in categories" :key="index">
          <h4>
            <NuxtLink
              :to="{
                name: 'kennisbank-categorieen-category',
                params: { category: category.slug },
              }"
            >
              {{ category.name }}
            </NuxtLink>
          </h4>
        </app-card>
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
      categories: "getKnowledgeBankCategories",
    }),
    pageContent() {
      return this.$store.getters.getPageBySlug("kennisbank");
    },
  },
});
</script>

<style lang="scss"></style>
