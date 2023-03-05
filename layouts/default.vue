<!-- Done Reviewing -->
<template>
  <div>
    <my-navbar-top />
    <my-navbar />
    <slot />
    <my-footer />
  </div>
</template>

<script>
export default defineComponent({name: "default-layout"})
</script>
