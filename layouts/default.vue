<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const KIT_ID = 28; // your hardcoded Elementor kit ID
useHead({
  bodyAttrs: {
    class: `elementor-kit-${KIT_ID}`,
  },
});
</script>
