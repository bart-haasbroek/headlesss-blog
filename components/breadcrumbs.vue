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
        <span v-else class="breadcrumbs__current-page">
          {{ item.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    adjustments: {
      type: Array,
      required: false,
    },
  },
  computed: {
    breadcrumbs() {
      let path = this.$route.path;
      if (this.adjustments) {
        this.adjustments.forEach((adjustment) => {
          const { word, replace } = adjustment;
          path = path.replace(word, replace);
        });
      }
      path = path.replace("pagina/1", "");
      const pathArray = path.split("/");

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

    &:last-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 700px;
    }
  }

  &__current-page {
    font-weight: 600;
  }
}
.breadcrumbs__item + .breadcrumbs__item {
  margin-left: 6px;
}

@media only screen and (max-width: 767px) {
  .breadcrumbs__item {
    font-size: 12px;

    &:last-child {
      max-width: 200px;
    }
  }
  .icon {
    font-size: 10px;
  }
}
</style>
