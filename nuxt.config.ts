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
    "@vee-validate/nuxt",
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
      link: [
        { rel: "icon", type: "image/x-icon", href: "/ficon_322.png" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        //   {
        //     rel: "stylesheet",
        //     href: "https://api.uw99mys.com/wp-content/plugins/elementor/assets/css/frontend.min.css",
        //   },
        //   {
        //     rel: "stylesheet",
        //     href: "https://api.uw99mys.com/wp-content/uploads/elementor/css/post-28.css",
        //   },
        //   {
        //     rel: "stylesheet",
        //     href: "https://api.uw99mys.com/wp-content/uploads/elementor/css/global.css",
        //   },
        // ],
        // script: [
        //   {
        //     src: "https://api.uw99mys.com/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.7.3",
        //     defer: true,
        //   },
        //   {
        //     src: "https://api.uw99mys.com/wp-content/plugins/elementor/assets/js/tabs.c1b4f75451f3adfe2779.bundle.min.js",
        //     defer: true,
        //   },
      ],
    },
  },
});
