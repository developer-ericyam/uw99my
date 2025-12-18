<template>
  <div class="relative">
    <UCarousel v-slot="{ item }" :items="items" class="w-full" autoplay>
      <img :src="item" width="100%" height="auto" class="rounded-lg" />
    </UCarousel>
    <div class="bannerAction">
      <a href="/en/registration/803975">REGISTER NOW</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  "/images/carousel/uw99wcasno.jpg",
  "/images/carousel/uw-promo-home-en-1.webp",
  "/images/carousel/uw-promo-home-en-2.webp",
  "/images/carousel/uw-promo-home-en-3.webp",
];
</script>

<style scoped lang="scss">
.bannerAction {
  z-index: 1;
  position: absolute;
  top: calc(84% - 30px);
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 192px;
    height: 60px;
    line-height: 52px;
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 19px;
    background-image: none !important;
    position: relative;
    z-index: 1;
    cursor: pointer;
    transition: all 0.2s ease;
    display: block;
    animation-name: uw88_grow;
    animation-duration: 3000ms;
    transform-origin: 50% 50%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    &:before {
      content: "";
      z-index: -1;
      top: 0;
      display: block;
      width: 216px;
      height: 80px;
      position: absolute;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      background-image: url(~/assets/images/games/primary-medium-new-selected.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}

@keyframes uw88_grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
