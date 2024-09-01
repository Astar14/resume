const inputText = document.querySelector(".todoValue");
const btn = document.querySelector(".btn");
const listValue = document.querySelector(".todolist");

let todoListValue = [];

const getTodoListfromLs = () => {
  return JSON.parse(localStorage.getItem("todoData")) || [];
};

const addTodoListLocalStorage = (todo) => {
  return localStorage.setItem("todoData", JSON.stringify(todo));
};


const showTodoList = () => {
    todoListValue = getTodoListfromLs();
    todoListValue.forEach((currTodo) => {
        const liElement = document.createElement('li')
        liElement.innerHTML = currTodo
        listValue.append(liElement)
    })
}



const addTodoList = (e) => {
  e.preventDefault();

  
  todoListValue = getTodoListfromLs();
    let newTodo = inputText.value.trim();
    inputText.value = ""

    if (newTodo.length !== 0 && !todoListValue.includes(newTodo)) {
      
      todoListValue.push(newTodo)

        addTodoListLocalStorage(inputText.value);
        
    addTodoListLocalStorage(todoListValue);

    const liElement = document.createElement("li");
    liElement.innerHTML = inputText.value;
        listValue.append(liElement);
  }
};

showTodoList()

btn.addEventListener("click", (e) => {
  addTodoList(e);
});
