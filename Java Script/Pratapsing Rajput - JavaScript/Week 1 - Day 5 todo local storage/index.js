function $(id) {
  return document.getElementById(id);
}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = $("todoInput");
  const addTodoButton = $("addTodoButton");
  const todoList = $("todoList");

  addTodoButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      addTodo(todoText);
      todoInput.value = "";
    }
  });

  loadTodos();

  function addTodo(text, isCompleted = false) {
    const li = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.textContent = text;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.disabled = isCompleted;

    completeButton.addEventListener("click", () => {
      todoSpan.style.textDecoration = "line-through";
      completeButton.disabled = true;
      saveTodos();
      // li.removeChild(completeButton);
    });

    if (isCompleted) {
      todoSpan.style.textDecoration = "line-through";
    }

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      todoList.removeChild(li);
      saveTodos();
    });

    li.appendChild(todoSpan);
    li.appendChild(completeButton);
    li.appendChild(removeButton);
    todoList.appendChild(li);
    saveTodos();
  }

  function saveTodos() {
    const todos = [];
    todoList.querySelectorAll("li").forEach((li) => {
      const text = li.querySelector("span").textContent;
      const isCompleted = li.querySelector("button").disabled;
      todos.push({
        text,
        isCompleted,
      });
      localStorage.setItem("todos", JSON.stringify(todos));
    });
  }

  function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos") || []);
    todos.forEach((todo) => {
      addTodo(todo.text, todo.isCompleted);
    });
  }
});
