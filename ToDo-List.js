# ToDo-List
Practical javascript project

const toDoArr = {
  todos: [],
  displayTodos: function(){
    if (this.todos === undefined || this.todos.length < 1){
      console.log('Your todo list is empty :(');
    } else {
    for (i=0; i < this.todos.length; i++){
      if (this.todos[i].completed === true){
        console.log('(x) ', this.todos[i].textTodo);
      } else {
        console.log('( ) ', this.todos[i].textTodo);
      }
    }
    }
  }, 
  addTodos: function(textTodo){
    this.todos.push({
      textTodo : textTodo,
      completed : false
   });
  //this.displayTodos();
  },
  changeTodos: function(todoText, pos){
    this.todos[pos].textTodo = todoText;
  },
  deleteTodos: function(pos){
    this.todos.splice(pos, 1);
  },
  toggleCompleted: function(pos){
    const todo = this.todos[pos];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    // find out how many are completed
    var completedTodos = 0;
    for (i=0; i < this.todos.length; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // case 1: if everything is true turn them to false
    if (this.todos.length === completedTodos){
      for (i=0; i < this.todos.length; i++){
        this.todos[i].completed = false;
      }
    // case 2: otherwise turn everything to true
    } else { 
        for (i=0; i < this.todos.length; i++){
        this.todos[i].completed = true;
        } 
    }
      this.displayTodos();
  }
}

const displayTodosButton = document.getElementById("displayTodosButton");

displayTodosButton.addEventListener('click', function(){
    toDoArr.displayTodos();
});
const toggleAllButton = document.getElementById("toggleAllButton");

toggleAllButton.addEventListener('click', function(){
    toDoArr.toggleAll();
});
