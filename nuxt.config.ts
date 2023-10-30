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
    '@hypernym/nuxt-anime',
    '@nuxtjs/fontaine',
    "@vueuse/nuxt",
  ],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000/",
    name: "Permadi",
    description: "Website Personal Dinar Permadi Yusup, Guru SD Programmer, dan Desainer Grafis ",
    defaultLocale: "id",
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: {
        default: "one-dark-pro",
        // dark: "github-dark",
      },
      preload: [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "py",
        "c",
        "cpp",
        "php",
      ],
    },
  },
  anime: {
    composables: true,
  },
  fontMetrics: {
    fonts: [
      {
        family: "Rubik",
        fallbacks: ["Rubik"],
        fallbackName: "Rubik",
      },
      {
        family: "Schibsted Grotesk",
        fallbacks: ["Schibsted Grotesk"],
        fallbackName: "Schibsted Grotesk",
      },
    ],
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
