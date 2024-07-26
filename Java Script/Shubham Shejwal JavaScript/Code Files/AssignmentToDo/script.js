document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById("todoInput");
    var button = document.getElementById("addTodoButton");
    var ulist = document.getElementById("todoList");
  
    button.addEventListener("click", function() {
      var li = document.createElement("li");
      var remove = document.createElement("button");
      remove.textContent = "Remove";
      remove.classList.add("remove");
      li.textContent = input.value.trim(); 
      if (li.textContent !== '') {
        ulist.appendChild(li); 
        li.appendChild(remove);
        input.value = ''; 
  
        // Add event listener to remove button
        remove.addEventListener("click", function() {
          ulist.removeChild(li);
        });
      }
    });
  });