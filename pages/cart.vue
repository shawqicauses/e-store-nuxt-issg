<!-- Done Reviewing -->
<template>
  <my-navbar-pages title="Cart" :pages="[{name: 'Cart', link: '/cart'}]" />
  <main class="my-5 py-5">
    <div class="my-container">
      <div class="my-flex-col gap-10 xl:flex-row">
        <div class="relative w-full flex-1 overflow-x-auto">
          <table class="w-full">
            <thead class="border-b border-slate-100">
              <tr>
                <th
                  v-for="(item, index) in header"
                  :key="item.name"
                  scope="col"
                  :colspan="index === 0 ? '2' : '1'"
                  class="label-uppercase p-5 text-slate-900">
                  {{ item.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data" :key="item.name" class="border-b bg-white">
                <th scope="row" colspan="2" class="max-w-[11.25rem] truncate p-5">
                  <div
                    class="my-flex-col !w-max gap-3 sm:flex-row sm:items-center sm:justify-center">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="aspect-square w-16 rounded-lg object-cover object-top" />
                    <p class="label text-slate-900">{{ item.name }}"</p>
                  </div>
                </th>
                <td class="label p-5 text-slate-500">${{ item.price }}</td>
                <td class="label p-5 text-slate-500">{{ item.quantity }}</td>
                <td class="label p-5 text-slate-500">${{ item.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-white w-full shrink-0 grow-0 basis-full p-5 xl:basis-80">
          <h3 class="label-uppercase text-slate-900">Card Totals</h3>
          <hr class="my-5 border-slate-100" />
          <div class="flex w-full items-start justify-between gap-5">
            <h4 class="label text-slate-900">Sub-Total</h4>
            <p class="label-lg text-teal-700">$772.25</p>
          </div>
          <hr class="my-5 border-slate-100" />
          <div class="flex w-full items-start justify-between gap-5">
            <h4 class="label text-slate-900">Shipping</h4>
            <div class="my-flex-col !items-end gap-2">
              <div class="my-flex !w-max gap-2">
                <label for="free-shipping-input" class="label text-slate-700">Free Shipping</label>
                <input
                  id="free-shipping-input"
                  type="checkbox"
                  class="h-5 w-5 rounded-md border-0 bg-slate-100 p-0 text-teal-500 focus:ring-transparent"
                  checked />
              </div>
              <div class="my-flex !w-max gap-2">
                <label for="lock-pick-up-input" class="label text-slate-700">Local Pick-Up</label>
                <input
                  id="lock-pick-up-input"
                  type="checkbox"
                  class="h-5 w-5 rounded-md border-0 bg-slate-100 p-0 text-teal-500 focus:ring-transparent" />
              </div>
            </div>
          </div>
          <hr class="my-5 border-slate-100" />
          <div class="flex w-full items-start justify-between gap-5">
            <h4 class="label text-slate-900">Address</h4>
            <div class="my-flex-col !items-end gap-2">
              <p class="label text-slate-700">Shipping To Location</p>
              <button type="button" class="label my-transition text-teal-700 hover:text-slate-900">
                Change Address
              </button>
            </div>
          </div>
          <hr class="my-5 border-slate-100" />
          <div class="my-flex mb-5 !items-start !justify-between gap-5">
            <h4 class="label text-slate-900">Total</h4>
            <p class="label-lg text-teal-700">$772.25</p>
          </div>
          <button type="button" class="button button-primary w-full">Checkout To Proceed</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default defineComponent({
  name: "cart-page",
  setup() {
    const header = ref([
      {name: "Product Name"},
      {name: "Price"},
      {name: "Quantity"},
      {name: "Total"}
    ])

    const data = ref([
      {
        name: "Women Bag Sweet Fashion",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
        price: 100,
        quantity: 5,
        total: 500
      },
      {
        name: "Women Bag Sweet Fashion",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
        price: 100,
        quantity: 5,
        total: 500
      },
      {
        name: "Women Bag Sweet Fashion",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
        price: 100,
        quantity: 5,
        total: 500
      }
    ])

    return {header, data}
  }
})
</script>
