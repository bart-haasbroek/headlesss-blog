<template>
  <div class="blog-item" v-if="item">
    <div class="blog-item__image" v-if="item.featured_image_url">
      <NuxtLink
        :to="{ name: 'berichten-slug', params: { slug: item.slug } }"
        aria-label="blog-image-link"
      >
        <nuxt-img
          :src="item.featured_image_url"
          quality="60"
          alt="blog-featured-image"
        />
      </NuxtLink>
    </div>
    <div class="blog-item__inner">
      <div class="blog-item__title">
        <h2>
          <NuxtLink
            :to="{ name: 'berichten-slug', params: { slug: item.slug } }"
          >
            {{ item.title.rendered }}
          </NuxtLink>
        </h2>
      </div>
      <div class="blog-item__summary">
        <p>{{ item.acf.contentIntro }}</p>
      </div>
      <div class="blog-item__bottom">
        <NuxtLink :to="{ name: 'berichten-slug', params: { slug: item.slug } }">
          Lees meer
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: undefined,
  },
};
</script>

<style lang="scss">
.blog-item {
  width: 100%;
  background: var(--color-light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.4);

  &__title {
    margin: 14px 0 8px;
  }

  &__inner {
    padding: 10px 22px 20px;
  }

  &__image {
    width: 100%;
    height: 200px;
    position: relative;

    a {
      position: relative;
      display: block;
      height: 100%;

      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: var(--color-dark);
        opacity: 0.8;
        display: block;
        top: 0;
      }
    }

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  &__summary p {
    line-height: 22px;
    font-size: 14px;
  }

  &__bottom {
    margin-top: 8px;

    a {
      color: var(--color-primary);
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
