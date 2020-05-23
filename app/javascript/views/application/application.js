import Vue from 'vue/dist/vue.esm'
import home from './sections/home.vue'
import search from './sections/search.vue'

document.addEventListener('DOMContentLoaded', () => {
  const vm = new Vue({
    el: '#kiwi-vue',
    components: {
      'home': home,
      'search': search
    }
  })
})
