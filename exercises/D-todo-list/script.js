function todoList(todos) {
  const content = document.getElementById("content");
  const choreList = document.createElement("ul");
  content.appendChild(choreList);

  todos.forEach((chore) => {
    let todoList = document.createElement("li");
    todoList.innerText = chore.todo;
    choreList.appendChild(todoList);

    function checkOffList(event) {
      if(event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none";
      } else {
        event.target.style.textDecoration = "line-through";
      }
    }
    todoList.addEventListener("click", checkOffList);
  });

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);