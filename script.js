let title, author, pages, read;
let myLibrary = [];
const library = document.querySelector(".library")

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(book.title);
}

Book.prototype.info = function() {
  let readMessage = "";
  if(this.read) {
    readMessage= "read";
  } else {
    readMessage="not read yet";
  }
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}.`;;
};

let theHobbit = new Book('dog','mom',234,true);
let theDog = new Book('dog','mom',234,true);
addBookToLibrary(theHobbit);
addBookToLibrary(theDog);

function render() {
  library.innerHTML = "";
  
  for (const book of myLibrary) {
    let eachBook = document.createElement("div");
    let title = document.createElement("h3");
    title.appendChild(document.createTextNode(book.title));
    eachBook.appendChild(title);

    let author = document.createElement("h4");
    author.appendChild(document.createTextNode(book.author));
    eachBook.appendChild(author);
    library.appendChild(eachBook);

    let pages = document.createElement("small");
    pages.appendChild(document.createTextNode(book.pages));
  }
}

render();