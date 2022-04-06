<template>
  <div class="page-wrapper">
    <page-header
      title="De titel"
      :image="pageContent.featured_image_url"
    ></page-header>
    <div class="content-wrapper">
      <app-grid :columns="3">
        <div>ddssd</div>
        <div>ddssd</div>
        <div>ddssd</div>
      </app-grid>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pageContent() {
      return this.$store.getters.getPageBySlug("home");
    },
  },
};
</script>
