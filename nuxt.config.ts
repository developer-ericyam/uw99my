// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/global.scss",
    "~/assets/css/menu.scss",
    "~/assets/css/footer.scss",
    "~/assets/css/mobile.scss",
  ],

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    '@vee-validate/nuxt',
  ],

  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "cn", name: "Chinese", file: "cn.json" },
      { code: "id", name: "Malaysia", file: "id.json" },
    ],
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/ficon_322.png" }],
    },
  },
});
