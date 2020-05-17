<template>
<section>
  <nav class='w-full container mx-auto flex justify-center'>
    <img class='w-48 lg:w-64 xl:w-auto' src='img/logo.jpg'>
  </nav>

  <!-- Buttons -->
  <div v-for='product in products' class='m-2 leading-normal flex'>
    <button class="btn btn-primary">
      {{ product.text }}
    </button>
  </div>
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
