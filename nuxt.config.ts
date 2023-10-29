// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtseo/module", "nuxt-og-image"],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000/",
    name: "Test Website",
    description: "Welcome to my awesome site!",
    defaultLocale: "id",
  },
  content: {
    documentDriven: true
  }
});
