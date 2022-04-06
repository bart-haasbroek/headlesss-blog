<template>
  <div class="breadcrumbs__wrapper">
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">
        <nuxt-link :to="'/'" class="title"> Home </nuxt-link>
      </li>
      <li v-for="(item, i) in breadcrumbs" :key="i" class="breadcrumbs__item">
        <nuxt-link :to="item.to" class="title">
          {{ item.title }}
        </nuxt-link>
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
  margin-left: 10px;
}
</style>
