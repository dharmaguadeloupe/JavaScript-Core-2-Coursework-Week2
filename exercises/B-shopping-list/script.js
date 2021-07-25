function shoppingList(arrayOfPeople) {
  //create variable to access content <div>
 const content = document.getElementById("content");
 //create unordered list element
 const unorderedList = document.createElement("ul");
 //add <ul> to content <div> 
 content.appendChild(unorderedList);

 //for loop to go through the array
 arrayOfPeople.forEach(item => {
   //create <li> element
  const listItem = document.createElement("li");
  //retrieve value of item each time and render on the webpage
  listItem.innerText = item;
  //add <li> items to <ul>
  unorderedList.appendChild(listItem);
 })
 

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
