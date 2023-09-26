<template>
  <the-banner />
  <home-intro />
  <home-download />
  <home-hospital />
  <home-team id="team" />
  <home-news id="news" />
  <home-recruiting id="recruiting" />
  <home-contact />
</template>

<script setup lang="ts">
  import TheBanner from '@/components/TheBanner.vue'
  import HomeContact from '@/components/home/HomeContact.vue'
  import HomeDownload from '@/components/home/HomeDownload.vue'
  import HomeHospital from '@/components/home/HomeHospital.vue'
  import HomeIntro from '@/components/home/HomeIntro.vue'
  import HomeNews from '@/components/home/HomeNews.vue'
  import HomeRecruiting from '@/components/home/HomeRecruiting.vue'
  import HomeTeam from '@/components/home/HomeTeam.vue'
</script>

<style scoped></style>
