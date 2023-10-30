// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtseo/module",
    "nuxt-og-image",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@twicpics/components/nuxt3",
    "@vueuse/nuxt",
  ],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000/",
    name: "Test Website",
    description: "Welcome to my awesome site!",
    defaultLocale: "id",
  },
  content: {
    documentDriven: true,
  },
  twicpics: {
    domain: `https://permadi.twic.pics/`,
    anticipation: 0.5,
    step: 50,
  },
  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Rubik: {
        wght: [300, 400, 500, 600, 700, 800, 900],
        ital: [300, 400, 500, 600, 700, 800, 900],
      },
      "Schibsted Grotesk": {
        wght: [400, 500, 600, 700, 800, 900],
        ital: [400, 500, 600, 700, 800, 900],
      },
    },
  },
});
