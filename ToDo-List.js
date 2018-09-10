# ToDo-List
Practical javascript project

const toDoArr = {
  todos: [],
  addTodos: function(textTodo){
    this.todos.push({
      textTodo : textTodo,
      completed : false
    });
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
  },
  toggleAll: function(){
    // find out how many are completed
    var completedTodos = 0;
    var todosLength = this.todos.length;
    this.todos.forEach(function(element) {
      if (element.completed === true){
        completedTodos++;
      }
    })
    // case 1: if everything is true turn them to false
    this.todos.forEach(function(element){
      if (todosLength === completedTodos){
        element.completed = false;
    // case 2: otherwise turn everything to true
      } else { 
        element.completed = true;
      }
      })
  }
};

const handlers = {
    addTodos: function(){
        toDoArr.addTodos(document.getElementById("addTodoInput").value);
        document.getElementById("addTodoInput").value = '';
        viewers.displayTodos();
    },
    deleteTodos: function(position){
      toDoArr.deleteTodos(position);
      viewers.displayTodos();
    },
    changeTodos: function(){
        const changeTodoText = document.getElementById("changeTodoText");
        const changeTodoNumber = document.getElementById("changeTodoNumber");
        toDoArr.changeTodos(changeTodoText.value, changeTodoNumber.valueAsNumber);
        changeTodoText.value = '';
        changeTodoNumber.value = null;
        viewers.displayTodos();
    },
    toggleCompleted: function(){
        const toggleCompletedNumber = document.getElementById("toggleCompleted");
        toDoArr.toggleCompleted(toggleCompletedNumber.valueAsNumber);
        toggleCompletedNumber.value = null;
        viewers.displayTodos();
    },
    toggleAll: function(){
        toDoArr.toggleAll();
        viewers.displayTodos();
    }
};

const viewers = {
    displayTodos: function(){
        const todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';
        toDoArr.todos.forEach(function(element, position){
            const todoLi = document.createElement('li');
           
            if(element.completed === true){
                todoLi.textContent = '(x) ' + element.textTodo;
            } else {
                todoLi.textContent = '( ) ' + element.textTodo;
            }

            todoLi.id = position;
            todoLi.appendChild(this.createDelButton());
            todoUl.appendChild(todoLi);
        }, this)
    },
    createDelButton: function(){
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'deleteButton';
      return deleteButton;
    },
    setUpEventListeners: function(){
      const todosUl = document.querySelector('ul');
      todosUl.addEventListener('click', function(event){
        const elementClicked = event.target;

       if (elementClicked.className === 'deleteButton'){
        handlers.deleteTodos(elementClicked.parentNode.id)
        }
      })
    }
}
viewers.setUpEventListeners();

    

