// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  srcDir: "src-nuxt/",
  devServer: {
    port: 3000,
  },
  runtimeConfig: {
    public: {
      mode: process.env.NODE_ENV, // development or production
    },
  },
});
