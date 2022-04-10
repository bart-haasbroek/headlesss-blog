<template>
  <div class="breadcrumbs__wrapper">
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">
        <nuxt-link :to="'/'" class="title">
          <b-icon class="home-icon" icon="house-door" />
          Home
        </nuxt-link>
      </li>
      <li v-for="(item, i) in breadcrumbs" :key="i" class="breadcrumbs__item">
        <b-icon class="icon" icon="chevron-right" />
        <nuxt-link
          class="title"
          :to="item.to"
          v-if="i < breadcrumbs.length - 1"
        >
          {{ item.title }}
        </nuxt-link>
        <span v-else>
          {{ item.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      const pathArray = this.$route.path.split("/");
      pathArray.shift();
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        if (path) {
          breadcrumbArray.push({
            to: breadcrumbArray[idx - 1]
              ? "/" + breadcrumbArray[idx - 1].title + "/" + path
              : "/" + path,
            title: path,
          });
        }
        return breadcrumbArray;
      }, []);

      return breadcrumbs;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-icon {
  margin-right: 5px;
}
.icon {
  font-size: 12px;
}
.breadcrumbs__wrapper {
  margin: 16px 0;
}
.breadcrumbs {
  display: flex;
  list-style-type: none;
  margin-bottom: 0;
  padding: 0;

  &__item {
    list-style-type: none;
  }
}
.breadcrumbs__item + .breadcrumbs__item {
  margin-left: 6px;
}
</style>
