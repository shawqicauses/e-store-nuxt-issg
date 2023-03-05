<!-- Done Reviewing -->
<template>
  <slide class="group relative mr-5 overflow-hidden pr-4">
    <img :src="image" :alt="name" class="aspect-square w-full rounded-lg object-cover" />
    <div
      :class="`max-w-[calc(${['100%', '2rem'].join('-')})]`"
      class="my-transition my-flex group-hover:card-white absolute bottom-2 left-2 !w-[calc(100%-2rem)] !justify-between gap-1 border-2 border-transparent !p-0 text-slate-900 group-hover:border-slate-50">
      <div class="my-transition my-flex card-white !w-max gap-1 truncate border-none">
        <div class="my-flex h-5 !w-5 shrink-0">
          <img :src="icon" :alt="name" />
        </div>
        <h3 class="heading-3 truncate text-base">{{ name }}</h3>
      </div>
      <nuxt-link
        to="/"
        class="my-flex label my-transition !w-max shrink-0 gap-2 opacity-0 group-hover:opacity-100">
        View More
        <chevron-right-icon class="h-5 w-5 fill-slate-300" />
      </nuxt-link>
    </div>
  </slide>
</template>

<script>
import {ChevronRightIcon} from "@heroicons/vue/20/solid"
import {Slide} from "vue3-carousel"

export default defineComponent({
  name: "categories-list",
  components: {Slide, ChevronRightIcon},
  props: {
    name: {type: String, required: true},
    image: {type: String, required: true},
    icon: {type: String, required: true}
  }
})
</script>
