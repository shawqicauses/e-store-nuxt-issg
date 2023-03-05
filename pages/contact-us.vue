<!-- Done Reviewing -->
<template>
  <my-navbar-pages title="Contact Us" :pages="[{name: 'Contact Us', link: '/contact-us'}]" />
  <main class="my-5 py-5">
    <div class="my-container my-flex flex-col gap-10">
      <div class="grid w-full grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-3">
        <div class="my-flex flex-col">
          <div class="my-flex mb-2 !w-max text-slate-900">
            <MapPinIcon class="h-14 w-14 fill-none stroke-current" />
          </div>
          <h3 class="heading-3 mb-1">Our Location</h3>
          <p class="label text-slate-500">Some Location Here</p>
        </div>
        <div class="my-flex flex-col">
          <div class="my-flex mb-2 !w-max text-slate-900">
            <PhoneIcon class="h-14 w-14 fill-none stroke-current" />
          </div>
          <h3 class="heading-3 mb-1">Phone Number</h3>
          <p class="label text-slate-500">+970 598 182 008</p>
        </div>
        <div class="my-flex flex-col">
          <div class="my-flex mb-2 !w-max text-slate-900">
            <EnvelopeIcon class="h-14 w-14 fill-none stroke-current" />
          </div>
          <h3 class="heading-3 mb-1">Email Address</h3>
          <p class="label text-slate-500">info@issgate.com</p>
        </div>
      </div>
      <form class="my-flex-col max-w-xl-5" action="#" method="POST">
        <div class="my-flex mb-3 flex-col !justify-start gap-3 md:flex-row">
          <from-input
            v-for="input in contactFormInputs.slice(0, 3)"
            :id="input.id"
            :key="input.id"
            :type="input.type"
            :name="input.id"
            :placeholder="input.placeholder"
            :label="input.label" />
        </div>
        <from-input
          v-for="input in contactFormInputs.slice(3, 4)"
          :id="input.id"
          :key="input.id"
          :type="input.type"
          :name="input.id"
          :placeholder="input.placeholder"
          :label="input.label" />
        <div class="my-flex-col mb-3 gap-3">
          <label for="user-message" class="label">Message</label>
          <textarea
            id="user-message"
            name="user-message"
            placeholder="I want to order .."
            rows="10"
            class="input" />
        </div>
        <div class="my-flex !justify-start">
          <button type="submit" class="button button-primary">Send</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/vue/24/outline"

export default defineComponent({
  name: "contact-us-page",
  components: {MapPinIcon, PhoneIcon, EnvelopeIcon},
  setup() {
    const contactFormInputs = [
      {
        id: "user-name",
        type: "text",
        placeholder: "Shawqi",
        label: "Name"
      },
      {
        id: "user-email",
        type: "email",
        placeholder: "me@shawqi.com",
        label: "Email"
      },
      {
        id: "user-phone",
        type: "tel",
        placeholder: "+970 598 182 008",
        label: "Phone"
      },
      {
        id: "user-subject",
        type: "text",
        placeholder: "Choose Subject",
        label: "Subject"
      }
    ]

    return {contactFormInputs}
  }
})
</script>
