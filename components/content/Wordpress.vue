<template>
  <div v-if="contentHTML">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="content" v-html="contentHTML" />
  </div>
</template>

<script setup lang="ts">
import DOMPurify from "isomorphic-dompurify";
interface IWordpressProps {
  slug?: string;
}

const props = defineProps<IWordpressProps>();
const route = useRoute();
const { locale } = useI18n();
const slug = props.slug || route.params.slug;
const contentHTML = ref<string>("");
const yoast = ref<any>({});

const lang = locale.value === "en" ? "" : locale.value;
const url = `https://api.uw99mys.com/wp-json/wp/v2/pages?slug=${slug}-${lang}`;
const { data } = await useFetch<any[]>(url);
if (data.value && data.value.length) {
  const { content, yoast_head_json } = data.value[0];
  contentHTML.value = DOMPurify.sanitize(content.rendered);
  yoast.value = yoast_head_json;

  const robots = yoast.value.robots;

  useHead({
    title: yoast.value.title || "Title",
    link: [
      {
        rel: "canonical",
        href: yoast.value.canonical || "https://uw99mys.com",
      },
    ],
    meta: [
      {
        name: "robots",
        content: `${robots["max-snippet"]}, ${robots["max-image-preview"]}, ${robots["max-video-preview"]}`,
      },
      { property: "og:title", content: yoast.value.og_title },
      { property: "og:description", content: yoast.value.og_description },
      { property: "og:locale", content: yoast.value.og_locale },
      { property: "og:site_name", content: yoast.value.og_site_name },
      { property: "og:type", content: yoast.value.og_type },
      { property: "og:url", content: yoast.value.og_url },
      { name: "twitter:card", content: yoast.value.twitter_card },
      { name: "description", content: yoast.value.description },
    ],
  });
}

function onClickHandler() {
  console.log("123");
}

onMounted(() => {
  const promoCards = document.querySelectorAll(".promo-card");
  promoCards.forEach((promoCard) => {
    promoCard.addEventListener("click", onClickHandler);
  });
});

onBeforeUnmount(() => {
  const promoCards = document.querySelectorAll(".promo-card");
  promoCards.forEach((promoCard) => {
    promoCard.removeEventListener("click", onClickHandler);
  });
});
</script>

<style scoped lang="scss">
:deep(.parent-wrapper) {
  max-width: 1200px;
  margin: auto;

  .wrapper {
    display: flex;
    padding-top: 80px;
    .left {
      width: 55%;
      position: relative;

      img.logo {
        position: absolute;
        left: 0;
        right: 0;
        top: -45px;
        margin: auto;
        height: 250px;
        z-index: 0;
      }

      img.brand {
        margin: auto;
        position: relative;
        z-index: 1;
      }
    }
    .right {
      width: 45%;

      h3.golden {
        font-size: 56px;
        line-height: 64px;
        font-family: "Galano-Bold", sans-serif;
        font-weight: 700;
        font-style: oblique;
        background-image: -webkit-linear-gradient(#e0c7ae 40%, #c2a884 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      h4.golden {
        font-size: 24px;
        line-height: 26px;
        font-family: "Galano-Bold", sans-serif;
        font-weight: 700;
        background: -webkit-linear-gradient(#e0c7ae 40%, #c2a884 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      p {
        line-height: 1.4;
        margin-top: 20px;
        font-size: 14px;
        color: #636363;
      }

      a {
        width: 160px;
        height: 50px;
        line-height: 40px;
        text-align: center;
        margin-top: 20px;
        color: #fff;
        font-size: 16px;
        background-image: none !important;
        position: relative;
        z-index: 1;
        cursor: pointer;
        display: block;

        &::before {
          content: "";
          z-index: -1;
          top: 0;
          left: -10px;
          display: block;
          width: 180px;
          height: 66px;
          position: absolute;
          background-image: url(~/assets/images/menu/primary-medium-new-selected.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }

  .promotion-wrapper {
    margin-bottom: 42px;
    border: 1px solid #d1ae8e;
    border-radius: 16px;
    padding: 32px;
    background: white;
    filter: drop-shadow(2px 4px 6px black);

    .promo-card {
      display: flex;
      margin-bottom: 16px;
      cursor: pointer;

      .left {
        padding: 0 15px;
        img {
          padding: 10px;
          background: #fff;
          filter: drop-shadow(0px 0px 3px #c2c1c250);
          border-radius: 10px;
        }
      }

      .right {
        padding: 0 15px;
        width: 25%;
        font-size: 15px;
        h3 {
          font-size: 18px;
          color: #d1ae8e;
          font-weight: bold;
        }

        .subtitle {
          display: flex;
          align-items: center;
          i {
            font-size: 20px;
            margin-right: 4px;
          }
        }

        .countdown {
          margin-bottom: 24px;
        }

        a {
          background-image: url(~/assets/images/menu/primary-medium-new-selected.png);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center 30px;
          padding: 42px;
          font-size: 11px;
          text-align: center;
          color: white;
          margin-left: -8px;
        }
      }
    }
  }

  .seo {
    border: 4px solid #d3b797;
    border-radius: 12px;
    padding: 2px 41px;
    margin-bottom: 38px;
    font-family: "galano-medium";
    margin-left: 28px;
    font-family: sans-serif !important;
    line-height: normal;

    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    h2 {
      font-size: 25px;
    }

    p {
      font-weight: bold;
      text-align: justify;
      color: #636363;
      line-height: 1.42857143;
    }

    a {
      color: red;
    }
  }
}

@media (max-width: 768px),
  only screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 1024px),
  only screen and (min--moz-device-pixel-ratio: 2) and (max-width: 1024px),
  only screen and (-o-min-device-pixel-ratio: 2/1) and (max-width: 1024px),
  only screen and (min-device-pixel-ratio: 2) and (max-width: 1024px),
  only screen and (min-resolution: 192dpi) and (max-width: 1024px),
  only screen and (min-resolution: 2dppx) and (max-width: 1024px) {
  :deep(.parent-wrapper) {
    width: 100%;

    .wrapper {
      display: unset;

      .left {
        width: 100% !important;
        overflow: hidden;
        left: 0 !important;
        height: 450px !important;
        padding-top: 40px;

        img.logo {
          top: 0;
        }
      }

      .right {
        width: 100% !important;
        padding: 0 23px;

        h3.golden,
        h4.golden,
        p {
          text-align: center;
        }

        a {
          left: 0;
          right: 0;
          margin: 10px auto 50px;
        }
      }
    }

    &.promotion {
      .wrapper {
        .left {
          img.brand {
            top: 0 !important;
          }
        }

        .right {
          top: 0 !important;
        }
      }

      .promotion-wrapper {
        margin-top: 40px;

        .promo-card {
          display: block;
          margin-bottom: 36px;

          .right {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
