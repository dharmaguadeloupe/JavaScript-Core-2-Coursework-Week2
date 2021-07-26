function readingList(books) {
  //create variable to store access to the content <div>
 const content = document.getElementById("content");
 //create <h1> heading
 const heading = document.createElement("h1");
 //add content "book list" to <h1>
 heading.innerText = "Book list";
 //render it to the webpage
 content.appendChild(heading);
//create <ul> & render to the webpage
 const unorderedBooksList = document.createElement("ul");
 content.appendChild(unorderedBooksList);

  books.forEach(book => {
    //create list element
    const bookListItem = document.createElement("li");
    //add it to <ul>
    unorderedBooksList.appendChild(bookListItem);
    //create <p>
    const bookTitleAndAuthor = document.createElement("p");
    //retrieve "title" & "author" values
    bookTitleAndAuthor.innerText = `${book.title} - ${book.author}`;
    //add each item to the <li> element 
    bookListItem.appendChild(bookTitleAndAuthor);

    //creat img element
    const bookCovers = document.createElement("img");
    bookCovers.src = book.cover;
    bookListItem.appendChild(bookCovers);

    //change background color if read or not
    if(book.alreadyRead === true) {
      bookListItem.style.backgroundColor = "green";
    } else {
      bookListItem.style.backgroundColor = "red";
    }
    
  })

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "https://images-eu.ssl-images-amazon.com/images/I/41bWcNdTGmL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51aKPFuUy1L._SX324_BO1,204,203,200_.jpg",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    cover: "https://images-eu.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
    alreadyRead: true
  }
];

readingList(books);