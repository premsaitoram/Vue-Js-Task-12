// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    "nuxt-icon",
    //"@nuxtjs/supabase",
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
  },
  app: {
    head: {
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
    },
  },
  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },
  css: ["/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
