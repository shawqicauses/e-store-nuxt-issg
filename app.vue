<!-- Done Reviewing -->
<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script>
const poppinsFont = [
  "https://fonts.googleapis.com/css",
  [
    ["family", "Poppins:100,200,300,400,500,600,700,800,900"].join("="),
    ["display", "swap"].join("=")
  ].join("&")
].join("?")

if (process.client) {
  const poppinsFontElement = document.createElement("link")
  poppinsFontElement.setAttribute("rel", "stylesheet")
  poppinsFontElement.setAttribute("href", poppinsFont)
  document.head.appendChild(poppinsFontElement)
  document.body.classList.add("font-poppins")
}
</script>
