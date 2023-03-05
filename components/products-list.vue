<!-- Done Reviewing -->
<template>
  <carousel
    :items-to-show="1"
    :wrap-around="true"
    :snap-align="'start'"
    :breakpoints="breakpoints"
    :mouse-drag="false">
    <products-item
      v-for="product in products"
      :key="product.name"
      :name="product.name"
      :image="product.image"
      :price-current="product.priceCurrent"
      :price-original="product.priceOriginal"
      :rating="product.rating"
      :statuses="product.statuses"
      :tags="product.tags" />
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import {Carousel, Navigation} from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"

export default defineComponent({
  name: "products-list",
  components: {Carousel, Navigation},
  props: {products: {type: Array, required: true}},
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
