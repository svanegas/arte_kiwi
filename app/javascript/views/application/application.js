import Vue from 'vue/dist/vue.esm'
import Vuetify from 'vuetify'

import home from './sections/home.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const vm = new Vue({
    el: '#kiwi-vue',
    vuetify: new Vuetify(),
    components: {
      'home': home
    }
  })
})
