<template>
<section>
  <nav class='w-full flex justify-center' style="max-height: 150px;">
    <img class='object-contain w-48 md:w-56 lg:w-64 sm:my-8' src='img/logo.png'>
  </nav>

  <h1>Testing life music</h1>

  <!-- Buttons -->
  <div class="flex flex-wrap pb-8 relative text-center">
    <div v-for='product in products' class="w-full my-1 flex justify-center z-10">
      <a :id="product.id" class="btn btn-primary text-ak-green-dark w-full max-w-xs sm:max-w-lg sm:py-4 text-xl" :href="product.link" target='_blank'>
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
      <img class='w-48 md:w-56 lg:w-64 absolute z-0 left-0 sm:ml-8' src='img/macha_verde.png'>
    </div>
    <!-- Social -->
    <div class="w-full flex justify-center mt-4 mb-2 z-10">
      <a href="https://www.instagram.com/arte_kiwi/" target="_blank"><img class="w-8 mx-2" src="img/social/instagram.svg" /></a>
      <a href="https://wa.link/btnclx" target="_blank"><img class="w-8 mx-2" src="img/social/whatsapp.svg" /></a>
      <a href="https://www.facebook.com/artekiwioficial" target="_blank"><img class="w-8 mx-2" src="img/social/facebook.svg" /></a>
    </div>
    <!-- Write us -->
    <div class="w-full my-2 z-10">
      Escríbenos: <a class="text-ak-red font-bold" href="mailto:contacto@artekiwi.com">contacto@artekiwi.com</a>
    </div>
    <!-- Text -->
    <div class="w-full my-2 mb-4 z-10">
      &copy; Copyright 2020, Arte Kiwi – Hecho con ❤️
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
        text: 'Caja regalo para toda ocasión',
        link: 'https://wa.link/s689ed'
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
