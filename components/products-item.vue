<!-- Done Reviewing -->
<template>
  <slide class="pr-4">
    <div class="relative">
      <button
        type="button"
        class="my-flex my-transition absolute right-2 top-2 z-10 h-10 !w-10 rounded-full bg-white hover:bg-red-500 hover:text-white">
        <heart-icon class="h-5 w-5 fill-none stroke-current" />
      </button>
      <nuxt-link to="/product" class="flex flex-col items-start">
        <div class="relative mb-2 aspect-[1/1.20] w-full overflow-hidden rounded-lg">
          <ul class="my-flex-col absolute top-2 left-2 !w-max gap-1">
            <li
              v-for="(status, index) in statuses.slice(0, 3)"
              :key="index"
              class="my-flex card-slate-50 !w-max gap-1 p-1">
              <img :src="status.image" :alt="status.name" class="h-4 w-4" />
              <p class="label text-xs text-slate-500">{{ status.name }}</p>
            </li>
          </ul>
          <img :src="image" :alt="name" class="h-full w-full object-cover" />
        </div>
        <h3 class="heading-3 mb-2 text-left">
          {{ name }}
        </h3>
        <p class="label-lg mb-2 text-red-500">
          ${{ priceCurrent }}
          <span class="label text-slate-500 line-through">${{ priceOriginal }}</span>
        </p>
        <ul class="my-flex flex-wrap !justify-start gap-1">
          <li
            v-for="(tag, index) in tags.slice(0, 3)"
            :key="index"
            class="my-flex card-slate-50 !w-max gap-1 p-1">
            <img :src="tag.image" :alt="tag.name" class="h-4 w-4" />
            <p class="label text-xs text-slate-500">{{ tag.name }}</p>
          </li>
        </ul>
      </nuxt-link>
    </div>
  </slide>
</template>

<script>
import {HeartIcon} from "@heroicons/vue/24/outline"
import {Slide} from "vue3-carousel"

export default defineComponent({
  name: "products-item",
  components: {Slide, HeartIcon},
  props: {
    name: {type: String, required: true},
    image: {type: String, required: true},
    priceCurrent: {type: Number, required: true},
    priceOriginal: {type: Number, required: true},
    rating: {type: Number, required: true},
    statuses: {type: Array, required: false, default: () => []},
    tags: {type: Array, required: false, default: () => []}
  }
})
</script>
