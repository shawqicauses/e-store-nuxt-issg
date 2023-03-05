<!-- Done Reviewing -->
<template>
  <section class="my-5 py-5">
    <div class="my-container">
      <categories-list :categories="categories" />
    </div>
  </section>
</template>

<script>
import categories from "../data/categories"

export default defineComponent({
  name: "categories-page",
  setup() {
    return {categories}
  }
})
</script>
