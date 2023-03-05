<!-- Done Reviewing -->
<template>
  <div class="my-flex mb-5 flex-wrap !justify-between gap-2 border-b-2 border-slate-100">
    <h2
      class="label-uppercase-lg relative py-2 text-slate-900 before:absolute before:left-0 before:-bottom-[0.125rem] before:right-0 before:inline-block before:h-[0.125rem] before:bg-slate-900">
      {{ name }}
    </h2>
    <nuxt-link :to="link.path" class="my-flex label !w-max gap-2">
      {{ link.text }}
      <chevron-right-icon class="h-5 w-5 fill-slate-300" />
    </nuxt-link>
  </div>
</template>

<script>
import {ChevronRightIcon} from "@heroicons/vue/20/solid"

export default defineComponent({
  name: "products-header",
  components: {ChevronRightIcon},
  props: {
    name: {type: String, required: true},
    link: {type: Object, required: true}
  }
})
</script>
