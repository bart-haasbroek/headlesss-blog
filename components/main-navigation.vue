<template>
  <nav class="navigation">
    <ul class="d-flex nav-list">
      <li v-for="(menuItem, index) in menuItems" :key="index">
        <nuxtLink :to="menuItem.url">
          {{ menuItem.title }}
        </nuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menuItems: undefined,
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  ul {
    li {
      a {
        display: block;
        padding: 10px 10px;
        border-radius: 4px;
        transition: all 0.4s ease;
        color: var(--color-dark);

        &:hover {
          background: var(--color-dark);
          color: white;
        }
      }
    }
    li + li {
      margin-left: 20px;
    }
  }
}
</style>
