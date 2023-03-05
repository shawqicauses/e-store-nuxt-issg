// Done Reviewing
import {defineNuxtPlugin} from "#app"
import VueStarRating from "vue-star-rating"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VueStarRating", VueStarRating)
})
