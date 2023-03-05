<!-- Done Reviewing -->
<template>
  <my-header />
  <section class="my-5 py-5">
    <div class="my-container">
      <categories-list :categories="categories" />
    </div>
  </section>
  <section class="my-5 py-5">
    <div class="my-container">
      <products-header name="Last Offers Products" :link="{text: 'View More', path: '/'}" />
      <products-list :products="productsLastOffers" />
    </div>
  </section>
  <section class="my-5 py-5">
    <div class="my-container">
      <products-header name="New Products" :link="{text: 'View More', path: '/'}" />
      <products-list :products="productsNew" />
    </div>
  </section>
  <section class="my-5 py-5">
    <div class="my-container">
      <products-header name="Featured Products" :link="{text: 'View More', path: '/'}" />
      <products-list :products="productsFeatured" />
    </div>
  </section>
</template>

<script>
import categories from "../data/categories"
import {productsFeatured, productsLastOffers, productsNew} from "../data/products"

export default defineComponent({
  name: "index-page",
  setup() {
    return {
      categories,
      productsLastOffers,
      productsNew,
      productsFeatured
    }
  }
})
</script>

<style>
.carousel__track {
  align-items: flex-start;
}

.carousel__prev,
.carousel__next {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(15, 118, 110);
  border-radius: 100%;
}

.carousel__prev {
  left: -5rem;
}

.carousel__next {
  right: -5rem;
}

.carousel__icon {
  width: 1.25rem;
  fill: white;
}

.vue-star-rating-star {
  display: flex !important;
  justify-content: center;
  align-items: center;
}
</style>
