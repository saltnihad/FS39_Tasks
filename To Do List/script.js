let todoList = [];

function renderTodos() {
  const container = document.getElementById("todoContainer");
  container.innerHTML = "";

  todoList.forEach((todo) => {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = todo.task;
    taskSpan.className = todo.completed ? "completed" : "";

    taskSpan.addEventListener("dblclick", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = todo.task;

      input.addEventListener("blur", () => {
        todo.task = input.value;
        renderTodos();
      });

      li.replaceChild(input, taskSpan);
      input.focus();
    });

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.onclick = () => {
      todo.completed = !todo.completed;
      renderTodos();
    };

    li.appendChild(taskSpan);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(completeBtn);
    container.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };
    todoList.push(newTodo);
    input.value = "";
    renderTodos();
  }
}

renderTodos();
