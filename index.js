var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    seen: true
  },
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    todos: [
      { text: "Learn JS" },
      { text: "Learn CSS" },
      { text: "Learn Vue" },
    ]
  },
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    message: "Reverse me!",
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    },
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: "Two-way binding!",
  },
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Fruits' },
      { id: 2, text: 'Dairy' },
    ]
  }
})
