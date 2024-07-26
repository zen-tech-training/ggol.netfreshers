function $(id) {
  return document.getElementById(id);
}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = $("todoInput");
  const addTodoButton = $("addTodoButton");
  const todoList = $("todoList");

  addTodoButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    if (todoText != "") {
      addTodo(todoText);
      todoInput.value = "";
    }
  });

  function addTodo(text) {
    const li = document.createElement("li");
    const todoSpan = document.createElement("span");
    const removeButton = document.createElement("button");

    todoSpan.textContent = text;

    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    li.appendChild(todoSpan);
    li.appendChild(removeButton);
    todoList.appendChild(li);
  }
});
