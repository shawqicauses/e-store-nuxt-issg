<!-- Done Reviewing -->
<template>
  <my-navbar-pages title="About Us" :pages="[{name: 'About Us', link: '/about-us'}]" />
  <main class="my-5 py-5">
    <div class="my-container">
      <div class="my-flex-col !items-center gap-10 lg:flex-row">
        <div class="flex-1">
          <h1 class="heading-2 mb-5 max-w-md capitalize text-teal-700">
            Our store is one of biggest stores in world
          </h1>
          <p class="body mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita quas, id
            eos dolorem iusto molestiae, sequi ea cumque veniam illo! Porro quam vitae sequi totam
            quia veniam architecto maiores.
          </p>
          <p class="body mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita quas, id
            eos dolorem iusto molestiae, sequi ea cumque veniam illo! Porro quam vitae sequi totam
            quia veniam architecto maiores.
          </p>
          <p class="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eligendi voluptatibus
            cumque sapiente neque labore consectetur. Quia beatae explicabo, tempora laborum saepe,
            laudantium culpa, quam accusantium obcaecati possimus optio aliquam!
          </p>
        </div>
        <div class="aspect-square flex-1">
          <img
            src="../assets/images/product.jpg"
            alt="About Us Image"
            class="h-full w-full rounded-lg object-cover" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default defineComponent({
  name: "about-page"
})
</script>
