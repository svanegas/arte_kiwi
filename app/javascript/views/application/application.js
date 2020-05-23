import Vue from 'vue/dist/vue.esm'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

import home from './sections/home.vue'
import search from './sections/search.vue'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const vm = new Vue({
    el: '#kiwi-vue',
    vuetify: new Vuetify(),
    components: {
      'home': home,
      'search': search
    }
  })
})
