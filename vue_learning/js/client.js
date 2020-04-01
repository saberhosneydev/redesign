Vue.component('todo-item', {
  props: ["param"],
  template: '<li><input type="checkbox" :name="param.id" :checked="param.checked ? true:false" v-on:click="check(param.id)"><label :for="param.id">{{param.text}} </label><button v-on:click="remove(param.id)">Remove</button></li>',
  methods: {
    remove: function(x){
     app.todos = app.todos.filter(function(value, index, arr){ return value.id != x ;});
     console.log(x);
   },
   check: function(x){
     console.log(x);
     if(app.todos[x].checked){
       app.todos[x].checked = false;
     }else {
       app.todos[x].checked = true;
     }
   }
  }
});
let app = new Vue({
  el: "#app-root",
  data: {
    todos: [],
    newToDo: '',
    counter: 0
  },
  methods: {
    addToDo: function(){
      this.todos.push({id:this.counter++ , text: this.newToDo, checked:false});
      this.newToDo = '';
    }
  },
})
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    if (input.value != "") {
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }else {
      
    }
  }
});
