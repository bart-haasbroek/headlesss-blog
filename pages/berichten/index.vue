<template>
  <div class="page-wrapper">
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
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      posts: "getPosts",
    }),
  },
});
</script>

<style lang="scss"></style>
