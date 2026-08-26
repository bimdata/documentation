<template>
  <div class="home-search-wrapper">
    <VPNavBarSearch />
  </div>
</template>

<script setup>
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
</script>

<style scoped>
.home-search-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}

/* Agrandir le bouton search hérité */
.home-search-wrapper :deep(.DocSearch-Button) {
  width: 400px;
  max-width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 1rem;
}
</style>