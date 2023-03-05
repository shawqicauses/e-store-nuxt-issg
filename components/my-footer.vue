<!-- Done Reviewing -->
<template>
  <footer class="my-10 mb-0 bg-slate-100 py-20 pb-0">
    <div class="my-container mb-20">
      <div class="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div class="my-flex-col col-span-full gap-5 lg:col-span-2">
          <span class="heading-1 !text-xl"> Logo </span>
          <p class="body mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit non ad
            veniam excepturi temporibus eveniet magni nemo porro, quae praesentium! Dicta asperiores
            rerum fugiat facere cumque atque dolore iste sed voluptatibus id optio iusto incidunt
            minus sapiente corrupti consequuntur, aspernatur error perspiciatis inventore, nemo
            accusamus! Odio vel autem tempora.
          </p>
        </div>
        <div class="my-flex-col gap-5">
          <h3 class="label-uppercase-lg text-slate-900">Main Menu</h3>
          <ul class="my-flex-col gap-2">
            <client-only>
              <li v-for="item in navigation" :key="item.name">
                <nuxt-link
                  :href="item.path"
                  class="my-transition label-uppercase hover:text-teal-700">
                  {{ item.name }}
                </nuxt-link>
              </li>
            </client-only>
          </ul>
        </div>
        <div class="my-flex-col gap-5">
          <h3 class="label-uppercase-lg text-slate-900">Payment Methods</h3>
          <div class="my-flex !w-max gap-2">
            <button
              v-for="item in payments"
              :key="item.name"
              type="button"
              class="my-flex my-transition h-10 !w-10 rounded-full bg-white text-slate-900">
              <img :src="item.icon" :alt="item.label" class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-teal-700 py-5">
      <div class="my-container my-flex flex-wrap !justify-between gap-5">
        <p class="label text-white">
          2023 © Copyrights Reserved By
          <a href="https://shukmed.com" class="my-transition hover:text-slate-900">Store Name</a>
        </p>
        <div class="my-flex !w-max gap-2">
          <a
            v-for="item in social"
            :key="item.name"
            href="#"
            class="my-flex my-transition h-10 !w-10 rounded-full bg-white text-slate-900 hover:text-white"
            :class="{
              [`hover:bg-blue-700`]: item.color === 'blue',
              [`hover:bg-rose-700`]: item.color === 'rose',
              [`hover:bg-blue-500`]: item.color === 'blue-500'
            }">
            <img :src="item.icon" :alt="item.name" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import navigation from "../data/navigation"
import payments from "../data/payments"
import social from "../data/social"

export default defineComponent({
  name: "my-footer",
  setup() {
    return {navigation, payments, social}
  }
})
</script>
