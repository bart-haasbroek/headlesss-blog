<template>
  <nav class="toc" v-if="toc.length > 0">
    <ul class="toc__nav">
      <li v-for="link of toc" :key="link.slug" :class="'depth-' + link.depth">
        <NuxtLink :to="`#${link.slug}`">{{ link.content }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    toc: undefined,
  },
};
</script>

<style lang="scss">
.toc__nav {
  margin: 0;
  padding: 0;
  padding: 10px;
  margin-bottom: 20px;

  li {
    position: relative;
    list-style: disc outside;
    + li {
      margin-top: 8px;
    }
    &.depth-2 {
      margin-left: 20px;
      list-style: circle;
    }

    a {
      display: block;
      color: #04c1a5;
      font-size: 16px;
      transition: color 0.4s ease;

      &:hover {
        color: #1d1d1d;
      }
    }
  }
}
</style>
