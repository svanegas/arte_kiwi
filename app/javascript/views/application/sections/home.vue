<template>
<section>
  <nav class='w-full flex justify-center' style="max-height: 150px;">
    <img class='object-contain w-48 md:w-56 lg:w-64 sm:my-8' src='img/logo.png'>
  </nav>

  <!-- Buttons -->
  <div class="flex flex-wrap pb-8 relative text-center">
    <div v-for='product in products' class="w-full my-1 flex justify-center z-10">
      <a :id="product.id" class="w-full max-w-xs sm:max-w-lg btn btn-primary sm:py-4 text-xl focus:outline-none outline-none" :href="product.link" target='_blank'>
        {{ product.text }}
      </a>
    </div>

    <!-- Textures -->
    <img class='w-48 md:w-56 lg:w-64 ml-2 absolute z-0' src='img/mancha_amarilla.png'>
    <img class='w-48 md:w-56 lg:w-64 absolute z-0 right-0 bottom-0' src='img/mancha_rosa_2.png'>
    <img class='w-12 absolute top-0 right-0 z-0 sm:mr-16' src='img/circulo_1.png'>
    <img class='w-20 absolute top-0 right-0 z-0 invisible sm:visible' src='img/circulo_2.png'>
  </div>

  <footer class='w-full flex flex-col text-center justify-center border-t border-grey pin-b'>
    <!-- Texture -->
    <div class="w-full relative z-0">
      <img class='w-48 md:w-56 lg:w-64 absolute z-0' src='img/macha_verde.png'>
    </div>
    <!-- Write us -->
    <div class="w-full my-2 mt-4 z-10">
      Escríbenos: <a href="mailto:contacto@artekiwi.com">contacto@artekiwi.com</a>
    </div>
    <!-- Social -->
    <div class="w-full flex justify-center mb-4 z-10">
      <img class="w-6 mx-2" src="img/social/instagram.svg">
      <img class="w-6 mx-2" src="img/social/whatsapp.svg">
      <img class="w-6 mx-2" src="img/social/facebook.svg">
    </div>
  </footer>
</section>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    products: [{
        id: 'caja-regalo',
        text: 'Caja regalo día de las madres',
        link: 'https://wa.link/tl3jh5'
      },
      {
        id: 'cartilla-lettering',
        text: 'Cartilla de lettering',
        link: 'https://wa.link/8yd3qd'
      },
      {
        id: 'cartilla-dibujos',
        text: 'Cartilla de dibujos Timoteo',
        link: 'https://wa.link/xmuqln'
      },
      {
        id: 'cartilla-timoteo',
        text: 'Cartilla de letra Timoteo',
        link: 'https://wa.link/gsljpo'
      },
      {
        id: 'taller-virtual-timoteo',
        text: 'Taller virtual de letra Timoteo',
        link: 'https://wa.link/tt2dc1'
      },
      {
        id: 'kits-marcadores',
        text: 'Kits de marcadores',
        link: 'https://wa.link/tfja2b'
      },
      {
        id: 'kits-timoteo',
        text: 'Kits de letra Timoteo',
        link: 'https://wa.link/p1yjc2'
      },
      {
        id: 'marcados-personalizados',
        text: 'Marcados personalizados',
        link: 'https://wa.link/ygy7q3'
      },
    ]
  })
}
</script>
