// Done Reviewing
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  plugins: ["@/plugins/vue-star-rating.client.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
