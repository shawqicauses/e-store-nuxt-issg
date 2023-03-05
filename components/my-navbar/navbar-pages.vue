<!-- Done Reviewing -->
<template>
  <section class="my-flex card-slate-50 !border-none py-5">
    <div class="my-container">
      <div class="my-flex-col gap-2">
        <h2 class="label-uppercase-lg text-teal-700">
          {{ title }}
        </h2>
        <ul class="my-flex !w-max divide-x-2 divide-slate-200">
          <li class="leading-none">
            <nuxt-link to="/" class="label-uppercase text-slate-500"> Home </nuxt-link>
          </li>
          <li v-for="page in pages" :key="page.name" class="mx-2 mr-0 px-2 pr-0 leading-none">
            <nuxt-link :to="page.link" class="label-uppercase text-slate-500">
              {{ page.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default defineComponent({
  name: "my-navbar-pages",
  props: {
    title: {type: String, required: true},
    pages: {type: Array, required: false, default: () => []}
  }
})
</script>
