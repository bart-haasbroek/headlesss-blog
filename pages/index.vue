<template>
  <div class="page-wrapper">
    <div class="homepage-header">
      <div class="content-wrapper h-100">
        <div class="row h-100">
          <div class="col-6 d-flex align-items-center">
            <div>
              <h1>Leer mooie creaties maken met pro create</h1>
              <button class="mt-3 button">Naar berichten</button>
            </div>
          </div>
          <div class="col-6 h-100 pt-2 pb-5">
            <img class="mx-auto" src="images/test-img1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- <page-header
      :title="pageContent.title.rendered"
      :image="pageContent.featured_image_url"
    ></page-header> -->
    <stroke title="Onze laatse blogs:">
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
      title="Blijf geinsprireerd!"
      data-aos="fade-In"
      data-aos-offset="-200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <input type="text" />
    </stroke>
    <stroke
      title="Handig om te gebruiken:"
      data-aos="fade-In"
      data-aos-offset="-200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <app-grid :columns="3">
        <app-card>
          <h4>Patroon tester</h4>
          <p>
            Zelf een mooi patroon ontworpen? Test hier hoe het eruitziet door
            hem als achtergrond te gebruiken!
          </p>
        </app-card>
      </app-grid>
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
