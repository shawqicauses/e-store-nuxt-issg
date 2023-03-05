<!-- Done Reviewing -->
<template>
  <header class="my-flex bg-slate-100 py-5">
    <div class="my-container">
      <div class="flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div class="max-w-xl-2 flex-1">
          <h1 class="heading-1 mb-2">Surprising Gifts For Your Be-Loved Person</h1>
          <p class="body mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam excepturi dicta vero
            ipsum, omnis iusto magnam facilis, libero praesentium asperiores atque voluptate
            aliquam, aspernatur ratione sed quasi suscipit ipsam tempora?
          </p>
          <button type="button" class="button-uppercase button-primary">Shop Now</button>
        </div>
        <div class="flex-1">
          <img
            src="../../assets/images/hero.jpg"
            alt="Header Image"
            class="-mb-5 max-w-lg mix-blend-darken" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// eslint-disable-next-line
import {defineComponent} from "vue"
export default defineComponent({name: "my-header"})
</script>
