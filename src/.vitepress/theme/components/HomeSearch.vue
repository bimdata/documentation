<template>
  <div class="hero-search m-t-12">
    <VPNavBarSearch />
  </div>
</template>

<script setup>
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
</script>

<style scoped>
.hero-search :deep(.DocSearch-Button) {
  width: 640px;
  max-width: 100%;
  height: 60px;
  font-size: 1rem;
  border-radius: 50px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
}
.VPNavBarSearch{
  padding: 0;
}
.dark .hero-search :deep(.DocSearch-Button) {
  border-color: rgba(78,160,232, .1);
}
</style>