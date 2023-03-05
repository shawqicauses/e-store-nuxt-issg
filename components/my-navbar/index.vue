<!-- Done Reviewing -->
<template>
  <div class="my-flex card-white !rounded-none !border-none">
    <div class="my-container">
      <div class="my-flex flex-col flex-wrap !justify-between gap-5 md:flex-row md:gap-10">
        <div class="my-flex !w-max gap-10">
          <span class="heading-1 !text-xl">Logo</span>
          <ul
            class="my-flex fixed inset-0 z-40 -translate-x-full flex-col gap-5 bg-white lg:static lg:h-auto lg:w-max lg:translate-x-0 lg:flex-row lg:bg-transparent">
            <client-only>
              <li v-for="item in navigation" :key="item.name">
                <router-link
                  :to="item.path"
                  class="my-transition label-uppercase hover:text-teal-700">
                  {{ item.name }}
                </router-link>
              </li>
            </client-only>
          </ul>
        </div>
        <div class="my-flex-col flex-1 flex-wrap !items-center gap-5 sm:flex-row">
          <div class="my-flex-col relative flex-1">
            <div
              id="search-wrapper"
              class="my-flex card-slate-50 !border p-1"
              :class="{
                '!rounded-none !rounded-t-lg': searchOpened,
                '!border-transparent !border-b-slate-100': searchOpened
              }"
              @click="searchOpen"
              @keypress="searchOpen">
              <label
                id="search-label"
                for="search-input"
                class="my-flex h-10 !w-10 shrink-0 text-teal-700">
                <magnifying-glass-icon class="h-5 w-5 stroke-current stroke-[1.5]" />
              </label>
              <input
                id="search-input"
                type="text"
                placeholder="Searching"
                class="input !border-none !p-0 !ring-0" />
            </div>
            <div
              :class="{'hidden': !searchOpened, 'my-flex-col': searchOpened}"
              class="card-slate-50 absolute bottom-0 z-40 translate-y-full rounded-none rounded-b-lg border-none shadow-lg shadow-slate-900/10">
              <div class="my-flex-col gap-10">
                <div class="my-flex-col w-full">
                  <ul class="my-flex flex-wrap !justify-start gap-2">
                    <li v-for="category in categories" :key="category.name">
                      <nuxt-link
                        to="/"
                        class="my-flex button-white button-small my-transition !w-max gap-2 text-slate-500">
                        <div class="my-flex !w-max">
                          <component :is="category.icon" class="h-5 w-5 fill-none stroke-current" />
                        </div>
                        <p class="label text-current">{{ category.name }}</p>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="my-flex !w-max flex-wrap gap-2">
            <button
              v-for="action in actions"
              :key="action.name"
              type="button"
              class="my-flex my-transition h-8 !w-8 rounded-full text-slate-900 hover:bg-teal-700 hover:text-white"
              @click="action.action"
              @keypress="action.action">
              <component :is="action.icon" class="h-5 w-5 stroke-current stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <my-modal :opened="signInOpened" :link="{name: 'Sign up', path: '/sign-up'}" @close="signInClose">
    <modal-title
      title="Welcome Back!"
      body="This is a simple paragraph that you can use to enhance your page by simply attracting users
        with some words" />
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
            <use xlink:href="../../assets/images/icons.svg#facebook"></use>
          </svg>
          Sign in Using Facebook
        </button>
        <button
          type="submit"
          class="my-flex my-transition button-small button-white gap-2 !leading-[1.5625rem] hover:border-red-700 hover:bg-red-700">
          <svg class="my-flex h-5 !w-5">
            <use xlink:href="../../assets/images/icons.svg#google"></use>
          </svg>
          Sign in Using Google
        </button>
      </div>
    </form>
  </my-modal>
  <my-modal :opened="signUpOpened" :link="{name: 'Sign in', path: '/sign-in'}" @close="signUpClose">
    <modal-title
      title="Welcome To Company!"
      body="This is a simple paragraph that you can use to enhance your page by simply attracting users
        with some words" />
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
            <use xlink:href="../../assets/images/icons.svg#facebook"></use>
          </svg>
          Sign up Using Facebook
        </button>
        <button
          type="submit"
          class="my-flex my-transition button-small button-white gap-2 !leading-[1.5625rem] hover:border-red-700 hover:bg-red-700">
          <svg class="my-flex h-5 !w-5">
            <use xlink:href="../../assets/images/icons.svg#google"></use>
          </svg>
          Sign up Using Google
        </button>
      </div>
    </form>
  </my-modal>
</template>

<script>
import {
  ArchiveBoxIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
  FireIcon,
  GlobeAltIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserIcon,
  WalletIcon
} from "@heroicons/vue/24/outline"
import {defineComponent} from "vue"
import navigation from "../../data/navigation"
import MyModal from "../modal.vue"

export default defineComponent({
  name: "my-navbar",
  components: {
    MyModal,
    ArchiveBoxIcon,
    ArrowTrendingUpIcon,
    BriefcaseIcon,
    DocumentDuplicateIcon,
    EnvelopeIcon,
    FireIcon,
    GlobeAltIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    PhoneIcon,
    ShoppingCartIcon,
    UserIcon,
    WalletIcon
  },
  setup() {
    // Data: Categories - Forms
    const categories = [
      {name: "Clothes", icon: ArchiveBoxIcon},
      {name: "Jackets", icon: BriefcaseIcon},
      {name: "Pants", icon: DocumentDuplicateIcon},
      {name: "Shirts", icon: FireIcon},
      {name: "Dresses", icon: HeartIcon},
      {name: "Hats", icon: ShoppingCartIcon}
    ]

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

    const searchOpened = ref(false)
    const searchOpen = function searchOpen() {
      searchOpened.value = true
    }

    const searchClose = function searchClose() {
      searchOpened.value = false
    }

    if (process.client) {
      document.addEventListener("click", (event) => {
        if (
          event.target.id !== "search-wrapper" &&
          event.target.id !== "search-label" &&
          event.target.id !== "search-input"
        )
          searchClose()
      })
    }

    const signInOpened = ref(false)
    const signInOpen = function signInOpen() {
      document.body.style.overflow = "hidden"
      signInOpened.value = true
    }

    const signInClose = function signInClose(value) {
      signInOpened.value = value
    }

    const signUpOpened = ref(false)
    const signUpOpen = function signUpOpen() {
      document.body.style.overflow = "hidden"
      signUpOpened.value = true
    }

    const signUpClose = function signUpClose(value) {
      signUpOpened.value = value
    }

    const actions = [
      {
        name: "profile-button",
        icon: UserIcon,
        action: signInOpen
      },
      {
        name: "favorite-button",
        icon: HeartIcon,
        async action() {
          navigateTo("/favorite")
        }
      },
      {
        name: "cart-icon",
        icon: ShoppingCartIcon,
        async action() {
          await navigateTo("/cart")
        }
      }
    ]

    return {
      navigation,
      categories,
      actions,
      signUpFormInputs,
      signInFormInputs,
      searchOpened,
      signInOpened,
      signUpOpened,
      searchOpen,
      searchClose,
      signInOpen,
      signInClose,
      signUpOpen,
      signUpClose
    }
  }
})
</script>
