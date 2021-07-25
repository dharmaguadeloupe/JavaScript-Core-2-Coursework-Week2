function readingList(books) {
  
 const content = document.getElementById("content");
 const heading = document.createElement("h1");
 heading.innerText = "Book list";
 content.appendChild(heading);
   const unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  books.forEach(book => {
    const bookListItem = document.createElement("li");
    const bookTitle = document.createElement("p");

  })

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);