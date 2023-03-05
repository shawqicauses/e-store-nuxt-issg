<!-- Done Reviewing -->
<template>
  <div class="my-flex !hidden flex-1 lg:!flex">
    <img
      src="../assets/images/product.jpg"
      alt="Sign-In Banner"
      class="h-full w-full rounded-lg object-cover" />
  </div>
  <div class="my-flex flex-1 !justify-start overflow-auto p-5 md:p-10">
    <div class="my-flex-col mx-auto max-w-xl gap-10">
      <nav class="my-flex flex-wrap !justify-between gap-10">
        <nuxt-link
          to="/"
          class="my-flex card-white my-transition label !w-max gap-2 px-5 pr-7 hover:border-slate-900 hover:bg-slate-900 hover:text-white">
          <chevron-left-icon class="h-5 w-5 fill-current stroke-current" />
          Home
        </nuxt-link>
        <p class="label inline-block">
          Not a member yet? <nuxt-link to="/sign-up" class="text-teal-500">Sign Up</nuxt-link>
        </p>
      </nav>
      <div class="my-flex-col mb-5 gap-2">
        <h1 class="heading-2 text-slate-900">Welcome Back Here!</h1>
        <p class="body">
          This is a simple paragraph that you can use to enhance your page by simply attracting
          users with some words
        </p>
      </div>
      <form class="my-flex-col" action="#" method="POST">
        <from-input
          v-for="input in signInFormInputs"
          :id="input.id"
          :key="input.id"
          :type="input.type"
          :name="input.id"
          :placeholder="input.placeholder"
          :label="input.label" />
        <div class="my-flex mb-10 flex-wrap !justify-between gap-2">
          <div class="my-flex !w-max gap-2">
            <input
              id="user-remember-me"
              type="checkbox"
              name="user-remember-me"
              class="card-slate-50 h-5 w-5 text-teal-500 focus:ring-teal-700" />
            <label for="user-remember-me" class="label text-slate-500">Remember me?</label>
          </div>
          <nuxt-link to="/sign-in" class="label my-transition text-slate-900 hover:text-teal-500">
            Forgot Password?
          </nuxt-link>
        </div>
        <div class="my-flex flex-col gap-2">
          <button type="submit" class="button-primary my-flex button-small !leading-[1.5625rem]">
            Sign in
          </button>
          <button
            type="submit"
            class="my-flex my-transition button-small button-white gap-2 !leading-[1.5625rem] hover:border-blue-700 hover:bg-blue-700">
            <svg class="my-flex h-5 !w-5">
              <use xlink:href="../assets/images/icons.svg#facebook"></use>
            </svg>
            Sign in Using Facebook
          </button>
          <button
            type="submit"
            class="my-flex my-transition button-small button-white gap-2 !leading-[1.5625rem] hover:border-red-700 hover:bg-red-700">
            <svg class="my-flex h-5 !w-5">
              <use xlink:href="../assets/images/icons.svg#google"></use>
            </svg>
            Sign in Using Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {ChevronLeftIcon} from "@heroicons/vue/20/solid"

definePageMeta({layout: "auth"})
export default defineComponent({
  name: "sign-in-page",
  components: {ChevronLeftIcon},
  setup() {
    const signInFormInputs = [
      {
        id: "sign-in-user-email",
        type: "email",
        placeholder: "me@shawqi.com",
        label: "Email"
      },
      {
        id: "sign-in-user-password",
        type: "password",
        placeholder: "••••••••••••",
        label: "Password"
      }
    ]

    return {signInFormInputs}
  }
})
</script>
