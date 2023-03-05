<!-- Done Reviewing -->
<template>
  <div
    :class="{hidden: !openedCopy, block: openedCopy}"
    class="my-transition fixed inset-0 z-50 bg-slate-900 bg-opacity-50">
    <div class="my-flex h-full !items-start overflow-y-auto overflow-x-hidden">
      <div class="my-flex relative h-full min-h-[48rem] w-full max-w-xl p-5">
        <div class="card-white relative !border-none !p-0">
          <div
            class="my-flex !justify-between rounded-t-lg border-b border-slate-100 px-10 py-5 pr-5">
            <nuxt-link
              v-if="link.name"
              :to="link.path"
              class="label-uppercase my-transition text-slate-900 hover:text-teal-700">
              {{ link.name }}
            </nuxt-link>
            <button
              type="button"
              class="my-transition my-flex card-slate-50 m-auto mr-[initial] !w-max !border-none text-slate-500/50 hover:bg-slate-100 hover:text-slate-900"
              @click="close">
              <x-mark-icon class="h-5 w-5 fill-current stroke-none" />
            </button>
          </div>
          <div class="px-10 py-5">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {XMarkIcon} from "@heroicons/vue/20/solid"

export default defineComponent({
  name: "my-modal",
  components: {XMarkIcon},
  props: {
    opened: {type: Boolean, required: true},
    link: {type: Object, required: false, default: () => {}}
  },
  emits: ["close"],
  setup(props, {emit}) {
    const openedRef = toRef(props, "opened")
    const openedCopy = ref(openedRef)

    watch(
      () => openedRef.value,
      (value) => {
        openedCopy.value = value
      }
    )

    const close = function close() {
      document.body.style.overflow = "scroll"
      openedCopy.value = false
      emit("close", false)
    }

    return {openedCopy, close}
  }
})
</script>
