<!-- Done Reviewing -->
<template>
  <div class="my-flex !hidden flex-1 lg:!flex">
    <img
      src="../assets/images/category-03.jpg"
      alt="Sign-Up Banner"
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
          Already a member? <nuxt-link to="/sign-in" class="text-teal-500">Sign in</nuxt-link>
        </p>
      </nav>
      <div class="my-flex-col mb-5 gap-2">
        <h1 class="heading-2 text-slate-900">Welcome To Our Company</h1>
        <p class="body">
          This is a simple paragraph that you can use to enhance your page by simply attracting
          users with some words
        </p>
      </div>
      <form class="my-flex-col" action="#" method="POST">
        <div class="my-flex flex-col gap-2 md:flex-row">
          <from-input
            v-for="input in signUpFormInputs.slice(0, 2)"
            :id="input.id"
            :key="input.id"
            :type="input.type"
            :name="input.id"
            :placeholder="input.placeholder"
            :label="input.label" />
        </div>
        <from-input
          v-for="input in signUpFormInputs.slice(2, signUpFormInputs.length)"
          :id="input.id"
          :key="input.id"
          :type="input.type"
          :name="input.id"
          :placeholder="input.placeholder"
          :label="input.label" />
        <div class="my-flex flex-col gap-2">
          <button type="submit" class="button-primary my-flex button-small !leading-[1.5625rem]">
            Sign up
          </button>
          <button
            type="submit"
            class="my-flex my-transition button-small button-white gap-2 !leading-[1.5625rem] hover:border-blue-700 hover:bg-blue-700">
            <svg class="my-flex h-5 !w-5">
              <use xlink:href="../assets/images/icons.svg#facebook"></use>
            </svg>
            Sign up Using Facebook
          </button>
          <button
            type="submit"
            class="my-flex my-transition button-small button-white gap-2 !leading-[1.5625rem] hover:border-red-700 hover:bg-red-700">
            <svg class="my-flex h-5 !w-5">
              <use xlink:href="../assets/images/icons.svg#google"></use>
            </svg>
            Sign up Using Google
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
  name: "sign-up-page",
  components: {ChevronLeftIcon},
  setup() {
    const signUpFormInputs = [
      {
        id: "user-first-name",
        type: "text",
        placeholder: "Shawqi",
        label: "First Name"
      },
      {
        id: "user-last-name",
        type: "text",
        placeholder: "Hatem",
        label: "Last Name"
      },
      {
        id: "user-email",
        type: "email",
        placeholder: "me@shawqi.com",
        label: "Email"
      },
      {
        id: "user-password",
        type: "password",
        placeholder: "••••••••••••",
        label: "Password"
      },
      {
        id: "user-password-confirmation",
        type: "password",
        placeholder: "••••••••••••",
        label: "Password Confirmation"
      }
    ]

    return {signUpFormInputs}
  }
})
</script>
