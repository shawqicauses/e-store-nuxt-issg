<!-- Done Reviewing -->
<template>
  <div class="my-flex-col mb-3 gap-2">
    <label :for="id" class="label">{{ label }}</label>
    <input :id="id" :type="type" :name="name" :placeholder="placeholder" class="input" />
  </div>
</template>

<script>
export default defineComponent({
  name: "form-input",
  props: {
    id: {type: String, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    placeholder: {type: String, required: true},
    label: {type: String, required: true}
  }
})
</script>
