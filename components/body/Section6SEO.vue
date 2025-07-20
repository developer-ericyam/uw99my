<template>
  <div v-if="contentHTML" class="seo">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="content" v-html="contentHTML" />
  </div>
</template>

<script setup lang="ts">
import DOMPurify from "isomorphic-dompurify";

const contentHTML = ref<string>("");
const yoast = ref<any>({});
const { data } = await useFetch<any[]>(
  "https://uw99mys.com/wp-json/wp/v2/pages?slug=homepage"
);
if (data.value && data.value.length) {
  const { content, yoast_head_json } = data.value[0];
  contentHTML.value = DOMPurify.sanitize(content.rendered);
  yoast.value = yoast_head_json;
  console.log(data)
}

const robots = yoast.value.robots;
useHead({
  title: yoast.value.title || "Title",
  link: [
    { rel: "canonical", href: yoast.value.canonical || "https://uw99mys.com" },
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
</script>

<style scoped lang="scss">
.seo {
  border: 4px solid #d3b797;
  border-radius: 12px;
  padding: 2px 41px;
  margin-bottom: 38px;
  font-family: "galano-medium";
  margin-left: 28px;
  font-family: sans-serif !important;
  line-height: normal;

  :deep(.content) {
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
    }
  }
}
</style>
