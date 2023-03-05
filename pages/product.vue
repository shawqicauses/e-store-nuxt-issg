<!-- Done Reviewing -->
<template>
  <my-navbar-pages
    title="About Us"
    :pages="[
      {name: 'Products', link: '/product'},
      {name: 'Men Hooded Navy Blue and Grey T-Shirt', link: '/product'}
    ]" />
  <main class="py-10">
    <div class="container mx-auto px-5 xl-2:max-w-xl-7">
      <div class="my-flex-col !items-stretch gap-10 lg:flex-row-reverse">
        <div class="image group relative flex-1">
          <img
            ref="image"
            :src="imageActive"
            alt="Product Image"
            class="mb-5 aspect-square w-full rounded-lg" />
          <ul class="grid grid-cols-2 items-center gap-2 sm:grid-cols-4">
            <li
              v-for="(productImage, index) in product.images"
              :key="index"
              class="aspect-square w-full overflow-hidden">
              <button
                type="button"
                class="h-full w-full overflow-hidden rounded-lg"
                @click="setImageActive(productImage)">
                <img
                  :src="productImage"
                  :alt="`Product Image ${index}`"
                  class="h-full w-full object-cover" />
              </button>
            </li>
          </ul>
        </div>
        <div class="image-result-container relative flex-1">
          <div
            ref="imageResult"
            :style="{'background-image': `url('${imageActive}')`}"
            class="image-result absolute inset-0 z-50 aspect-square w-full rounded-lg opacity-0 shadow-lg shadow-slate-900/10" />
          <h1 class="heading-2 mb-2 sm:max-w-sm md:max-w-md">
            Men Hooded Navy Blue and Grey T-Shirt
          </h1>
          <p class="body-lg mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita quas, id
            eos dolorem iusto molestiae, sequi ea cumque veniam illo! Porro quam vitae sequi totam
            quia veniam architecto maiores.
          </p>
          <p class="label mb-5 text-red-500 md:text-xl lg:text-xl-2">
            $160
            <span class="label line-through">$200</span>
          </p>
          <div class="my-flex-col mb-5 gap-2">
            <h3 class="label-uppercase font-semi-bold text-slate-900">Size</h3>
            <ul class="my-flex !w-max flex-wrap gap-2">
              <li v-for="size in product.sizes" :key="size.name">
                <button
                  type="button"
                  class="card-slate-50 label-uppercase my-transition hover-slate-900 h-10 w-10">
                  {{ size.value }}
                </button>
              </li>
            </ul>
          </div>
          <div class="my-flex-col mb-5 gap-2">
            <h3 class="label-uppercase font-semi-bold text-slate-900">Color</h3>
            <ul class="my-flex !w-max flex-wrap gap-2">
              <li v-for="color in product.colors" :key="color.name">
                <button
                  type="button"
                  :class="{
                    [`hover:border-${color.value}-900 border-${color.value}-200`]: true,
                    [`bg-${color.value}-100 hover:bg-${color.value}-900}`]: true
                  }"
                  class="my-transition h-10 w-10 rounded-lg border"></button>
              </li>
            </ul>
          </div>
          <div class="my-flex-col !items-center gap-5 xs:flex-row">
            <div class="my-flex !w-max gap-2">
              <button
                type="button"
                class="my-transition card-slate-50 label-lg hover-slate-900 h-10 w-10">
                +
              </button>
              <p class="label-uppercase font-semi-bold text-slate-900">0</p>
              <button
                type="button"
                class="my-transition card-slate-50 label-lg hover-slate-900 h-10 w-10">
                -
              </button>
            </div>
            <div class="my-flex !w-max gap-2">
              <button type="button" class="button button-primary">Add To Cart</button>
              <button type="button" class="button button-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <section class="my-5 py-5">
    <div class="my-container">
      <products-header name="Related Products" :link="{text: 'View More', path: '/'}" />
      <products-list :products="productsFeatured" />
    </div>
  </section>
</template>
<script>
import {ref} from "vue"
import product from "../data/product"
import {productsFeatured} from "../data/products"

export default defineComponent({
  name: "product-page",
  setup() {
    const image = ref(null)
    const imageActive = ref(null)
    const imageResult = ref(null)

    const setImageActive = function setImageActive(imageActivated) {
      imageActive.value = imageActivated
    }

    onMounted(() => {
      if (process.client) {
        setImageActive(product.images[0])
        // Create Lens Element
        const imageLens = ref(document.createElement("div"))
        imageLens.value.setAttribute(
          "class",
          "group-hover:pointer-events-auto group-hover:opacity-100 image-lens"
        )

        // Insert Lens Element
        image.value.parentElement.insertBefore(imageLens.value, image.value)

        // Calculate Radio Between Result Div/Lens
        const cx = ref(imageResult.value.offsetWidth / imageLens.value.offsetWidth)
        const cy = ref(imageResult.value.offsetHeight / imageLens.value.offsetHeight)

        // Set Background Properties For Result Div
        imageResult.value.style.backgroundSize = `${image.value.width * cx.value}px ${
          image.value.height * cy.value
        }px`

        const getCursorPos = function getCursorPos(e) {
          // eslint-disable-next-line
          e = e || window.event
          // Get X/Y Positions Of Image
          const a = ref(image.value.getBoundingClientRect())

          // Calculate Cursor's X/Y Coordinates, Relative To Image
          const x = ref(e.pageX - a.value.left)
          const y = ref(e.pageY - a.value.top)

          // Consider Any Page Scrolling
          x.value -= window.pageXOffset
          y.value -= window.pageYOffset

          return {x, y}
        }

        const moveLens = function moveLens(e) {
          // Prevent Any Other Actions
          e.preventDefault()

          // Get Cursor's X/Y Positions
          const position = ref(getCursorPos(e))

          // Calculate Position Of Lens
          const x = ref(position.value.x - imageLens.value.offsetWidth / 2)
          const y = ref(position.value.y - imageLens.value.offsetHeight / 2)

          // Prevent Lens From Being Positioned Outside Image
          if (x.value > image.value.width - imageLens.value.offsetWidth)
            x.value = image.value.width - imageLens.value.offsetWidth
          if (x.value < 0) x.value = 0

          if (y.value > image.value.height - imageLens.value.offsetHeight)
            y.value = image.value.height - imageLens.value.offsetHeight
          if (y.value < 0) y.value = 0

          // Set Position Of Lens
          imageLens.value.style.left = `${x.value}px`
          imageLens.value.style.top = `${y.value}px`

          // Display What Lens Sees
          imageResult.value.style.backgroundPosition = `-${x.value * cx.value}px -${
            y.value * cy.value
          }px`
        }

        // Execute a Function When Someone Moves/Touch Cursor Over Image/Lens
        imageLens.value.addEventListener("mousemove", moveLens)
        imageLens.value.addEventListener("touchmove", moveLens)
        image.value.addEventListener("mousemove", moveLens)
        image.value.addEventListener("touchmove", moveLens)
      }
    })

    return {
      product,
      image,
      imageActive,
      imageResult,
      productsFeatured,
      setImageActive
    }
  }
})
</script>

<style>
.image-lens {
  position: absolute;
  width: 10rem;
  height: 15rem;
  border: 0.125rem solid white;
  border-radius: 0.125rem;
  background: rgba(0, 0, 0, 0.125);
  pointer-events: none;
  opacity: 0;
}

.image:hover + .image-result-container .image-result {
  opacity: 1;
}
</style>
