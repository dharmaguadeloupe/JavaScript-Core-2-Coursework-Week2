function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
    todos.forEach(todo => {
    // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

    //create list element
    const listItem = list.appendChild(document.createElement("li"));
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = `${todo.task}`;

    //create span element
    const span = listItem.appendChild(document.createElement("span"));
    span.className = "badge bg-primary rounded-pill";
    
    //create two icon elements
    //first icon element
    const completedIcon = span.appendChild(document.createElement("i"));
    completedIcon.className = "fa fa-check";
    completedIcon.setAttribute("aria-hidden", "true");

    //function for completed button
    function lineThrough() {
      if(listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "none";
      } else {
        listItem.style.textDecoration = "line-through";
      }
    }
    completedIcon.addEventListener("click", lineThrough);

    //second icon element
    const trashIcon = span.appendChild(document.createElement("i"));
    trashIcon.className = "fa fa-trash";
    trashIcon.setAttribute("aria-hidden", "true");

    function deleteIcon () {
      listItem.remove();
      alert("Item has been removed");
    }
    trashIcon.addEventListener("click", deleteIcon);
    });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const input = document.getElementById("todoInput");
  let newItem = { task: input.value, completed: false};
  todos.push(newItem);
  populateTodoList(todos);

  input.value = "";
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
