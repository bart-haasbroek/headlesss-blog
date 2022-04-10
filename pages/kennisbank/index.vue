<template>
  <div class="page-wrapper">
    <page-header title="Kennisbank"></page-header>
    <div class="content-wrapper page-content--space-top">
      <app-grid columns="3">
        <b-card
          no-body
          v-for="(category, index) in categories"
          :key="index"
          :title="category.name"
          class="mb-2 w-100"
        >
          <b-card-body>
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
          </b-card-body>
        </b-card>
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
