function shoppingList(arrayOfPeople) {
 const content = document.getElementById("content");
 const unorderedList = document.createElement("ul");
 content.appendChild(unorderedList);

 arrayOfPeople.forEach(item => {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  unorderedList.appendChild(listItem);
 })
 

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
