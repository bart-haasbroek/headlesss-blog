<template>
  <div class="page-wrapper">
    <div class="homepage-header">
      <div class="content-wrapper h-100">
        <div class="row h-100">
          <div class="col-6 d-flex align-items-center">
            <div>
              <h1>Leer mooie creaties maken met pro create</h1>
              <app-button class="mt-3 button" color="white"
                >Naar berichten</app-button
              >
            </div>
          </div>
          <div class="col-6 h-100 pt-2 pb-5">
            <img class="mx-auto" src="images/test-img1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <stroke>
      <app-grid :columns="4">
        <app-card
          v-for="(highlight, index) in highlights"
          data-aos="fade-up"
          data-aos-offset="-250"
          :data-aos-delay="index * 200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.description }}</p>
          <app-button>bekijk</app-button>
        </app-card>
      </app-grid>
    </stroke>
    <stroke title="Creatief blog">
      <app-grid :columns="3">
        <blog-item
          v-for="(post, index) in posts"
          data-aos="fade-up"
          data-aos-offset="-250"
          :data-aos-delay="index * 200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
          :key="index"
          :item="post"
        ></blog-item>
      </app-grid>
    </stroke>
    <stroke
      :isBlue="true"
      data-aos="fade-In"
      data-aos-offset="-200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <subscribe-to-newsletter
        title="Blijf geïnspireerd!"
        @submit="subscribe($event)"
      >
      </subscribe-to-newsletter>
    </stroke>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { buildSeoHead } from "../helpers/build-seo-head";
export default {
  head() {
    return buildSeoHead(this.pageContent);
  },
  data() {
    return {
      highlights: [
        {
          title: "Leren",
          description: "Leer digitaal tekenen met pro create!",
          route: "",
        },
        {
          title: "Handig",
          description: "Verschillende tools om te kunnen gebruiken",
          route: "",
        },
        {
          title: "Downloads",
          description: "Leuke downloads om uit te proberen",
          route: "",
        },
        {
          title: "Reviews",
          description: "Leuke downloads om uit te proberen",
          route: "",
        },
      ],
    };
  },
  methods: {
    subscribe(event) {
      console.log("event", event);
    },
  },
  computed: {
    ...mapGetters({
      posts: "getPosts",
    }),
    pageContent() {
      return this.$store.getters.getPageBySlug("home");
    },
  },
};
</script>

<style lang="scss">
.homepage-header {
  height: 550px;
  max-height: 80vh;
  background: #f0f8ff;
  border-radius: 0 0 40px 40px;

  h1 {
    font-size: 62px;
    font-weight: 600;
  }
}
</style>
