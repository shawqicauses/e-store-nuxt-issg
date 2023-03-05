<!-- Done Reviewing -->
<template>
  <div class="my-flex card-white !border-b border-b-slate-100">
    <div class="my-container">
      <div class="my-flex flex-col !justify-between gap-5 lg:flex-row">
        <div class="my-flex flex-col gap-2 md:w-auto md:flex-row md:gap-5">
          <div class="my-flex card-slate-50 md:card-reset gap-2 text-teal-700 md:w-max">
            <phone-icon class="h-5 w-5 stroke-current" />
            <p class="label-uppercase text-slate-900">(123)-456-789</p>
          </div>
          <div class="my-flex card-slate-50 md:card-reset gap-2 text-teal-700 md:w-max">
            <envelope-icon class="h-5 w-5 stroke-current" />
            <p class="label-uppercase text-slate-900">info@store.com</p>
          </div>
          <div class="my-flex card-slate-50 md:card-reset gap-2 text-teal-700 md:w-max">
            <label for="languages">
              <globe-alt-icon class="h-5 w-5 stroke-current" />
            </label>
            <select
              id="languages"
              class="label-uppercase card-reset p-0 pr-10 text-slate-900 !outline-none !ring-0">
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          </div>
          <div class="my-flex card-slate-50 md:card-reset gap-2 text-teal-700 md:w-max">
            <label for="country" class="my-flex !w-max shrink-0 gap-2">
              <map-pin-icon class="h-5 w-5 stroke-current" />
              <p class="label-uppercase text-slate-900">Deliver To</p>
            </label>
            <select
              id="country"
              class="label-uppercase card-reset p-0 pr-10 text-slate-900 !outline-none !ring-0">
              <option :value="country">{{ country }}</option>
              <option value="another">Another</option>
            </select>
          </div>
        </div>
        <div class="my-flex !w-max gap-5">
          <p class="label-uppercase text-slate-900">Follow Us:</p>
          <div class="my-flex !w-max gap-1">
            <button
              v-for="item in social"
              :key="item.name"
              type="button"
              class="my-flex my-transition h-8 !w-8 rounded-full text-slate-900 hover:bg-slate-100">
              <img :src="item.icon" :alt="item.name" class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {EnvelopeIcon, GlobeAltIcon, MapPinIcon, PhoneIcon} from "@heroicons/vue/24/outline"
import CT from "countries-and-timezones"
import social from "../../data/social"

export default defineComponent({
  name: "my-navbar-top",
  components: {EnvelopeIcon, GlobeAltIcon, MapPinIcon, PhoneIcon},
  setup() {
    const {timeZone} = Intl.DateTimeFormat().resolvedOptions()
    const timeZoneCountry = CT.getCountryForTimezone(timeZone)
    const country = ref(timeZoneCountry.name)
    return {country, social}
  }
})
</script>
