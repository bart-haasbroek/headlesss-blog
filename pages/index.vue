<template>
  <div class="page-wrapper">
    <page-header title="De titel"></page-header>
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
  created() {
    this.$store.commit("app/setPagetitle", "Home");
  },
};
</script>
