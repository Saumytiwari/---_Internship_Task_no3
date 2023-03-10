
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");


function addTodoItem(event) {

  event.preventDefault();

  
  const todoText = todoInput.value.trim();

  
  if (todoText !== "") {
    
    const li = document.createElement("li");

    
    const label = document.createElement("label");
    label.innerText = todoText;

    
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    
    li.appendChild(checkbox);
    li.appendChild(label);

    
    li.appendChild(deleteButton);

    
    todoList.appendChild(li);

    
    todoInput.value = "";
  }
}

function deleteTodoItem(event) {
  
  const target = event.target;

  
  const parent = target.parentElement;

  
  todoList.removeChild(parent);
}


form.addEventListener("submit", addTodoItem);
todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    deleteTodoItem(event);
  }
});
