<!-- Done Reviewing -->
<template>
  <div class="my-flex-col mb-10 gap-2">
    <h1 class="heading-2">{{ title }}</h1>
    <p class="body">{{ body }}</p>
  </div>
</template>

<script>
export default defineComponent({
  name: "modal-title",
  props: {
    title: {type: String, required: true},
    body: {type: String, required: true}
  }
})
</script>
