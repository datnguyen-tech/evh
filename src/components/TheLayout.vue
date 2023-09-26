<template>
  <the-menu />
  <router-view></router-view>
  <the-footer />
</template>

<script setup lang="ts">
  import TheFooter from './TheFooter.vue'
  import TheMenu from './TheMenu.vue'
</script>

<style scoped></style>
