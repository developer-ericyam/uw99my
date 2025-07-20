<template>
  <UCarousel v-slot="{ item }" :items="items" class="w-full" autoplay>
    <img :src="item" width="100%" height="auto" class="rounded-lg" />
  </UCarousel>
</template>

<script setup lang="ts">
const items = [
  "/images/carousel/carousel_1.jpg",
  "/images/carousel/carousel_2.webp",
];
</script>
