<!-- Done Reviewing -->
<template>
  <carousel
    :items-to-show="1"
    :wrap-around="true"
    :snap-align="'start'"
    :breakpoints="breakpoints"
    :mouse-drag="false">
    <categories-item
      v-for="category in categories"
      :key="category.name"
      :name="category.name"
      :image="category.image"
      :icon="category.icon" />
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import {Carousel, Navigation} from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"

export default defineComponent({
  name: "categories-list",
  components: {Carousel, Navigation},
  props: {categories: {type: Array, required: true}},
  setup() {
    const breakpoints = {
      768: {itemsToShow: 2},
      1024: {itemsToShow: 3},
      1336: {itemsToShow: 4}
    }

    return {breakpoints}
  }
})
</script>
