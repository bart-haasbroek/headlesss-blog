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
      <div class="mb-2">
        <NuxtLink
          class="blog-item__category"
          v-for="(category, index) of item.categoryList"
          :key="'cat-' + index"
          :to="{
            name: 'categorieen-slug',
            params: { slug: category.slug },
          }"
        >
          {{ category.name
          }}<template v-if="index < item.categoryList.length - 1">,</template>
        </NuxtLink>
      </div>
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
$border-radius: 20px;
.blog-item {
  width: 100%;
  background: var(--color-light);
  border-radius: $border-radius;
  overflow: hidden;
  // box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.4);
  // box-shadow: 0px 0px 10px 3px rgb(0 0 0 / 7%);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }

  &__title h2 {
    margin: 14px 0 8px;
    font-size: 20px;
  }

  &__inner {
    padding: 10px 22px 20px;
  }

  &__category {
    color: #688095;
    font-weight: 400;
    font-size: 14px;
    & + .blog-item__category {
      margin-left: 5px;
    }
  }

  &__image {
    width: 100%;
    height: 230px;
    position: relative;
    border-radius: $border-radius;
    overflow: hidden;

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
        opacity: 0.2;
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
      font-weight: 500;
      font-size: 14px;
    }
  }
}
</style>
