
let myLibrary = [];
const library = document.querySelector(".library");
const submitBtn = document.getElementById("submit-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const notRead = document.getElementById("book-not-read");
const read = document.getElementById("book-read");

submitBtn.addEventListener ('click' , function () {
  if(title.value == "" || author.value == "" || pages.value == "") {
    alert("Please enter a value for each field");
    return;
  }

  let isRead = false;
  if(read.checked){
    isRead = true;
  }

  let createdBook = new Book(title.value, author.value, pages.value, isRead);
  addBookToLibrary(createdBook);
  render();
  clearInputs();
});

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function deleteBook(book) {
console.log("button works");
myLibrary.splice(book, 1);
render();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(book.title);
}

function clearInputs() {
  title.value = "";
  author.value = "";
  pages.value = "";
  notRead.checked = true;
}

let theHobbit = new Book('dog','mom',234,true);
let theDog = new Book('bog','mom',234,false);
let theFog = new Book('Harry Potter and the Sorcers stone','momttmomttmomttmomttmomtt',235554,false);
addBookToLibrary(theHobbit);
addBookToLibrary(theDog);
addBookToLibrary(theFog);

function render() {
  library.innerHTML = "";
  
  for (const [index, book] of myLibrary.entries()) {
    let eachBook = document.createElement("div");
    eachBook.className = "book";

    let title = document.createElement("h3");
    title.className = "title";
    title.appendChild(document.createTextNode(book.title));
    eachBook.appendChild(title);

    let author = document.createElement("h4");
    author.className = "author";
    author.appendChild(document.createTextNode(book.author));
    eachBook.appendChild(author);
    
    let pages = document.createElement("small");
    pages.className = "pages";
    pages.appendChild(document.createTextNode(`${book.pages} pages`));
    eachBook.appendChild(pages);

    let readBox = document.createElement('div');
    readBox.className = "read-box";

    let readLabel = document.createElement('label');
    readLabel.className = "read-label"
    readLabel.htmlfor = "read";
    readLabel.appendChild(document.createTextNode("Read"));
    readBox.appendChild(readLabel);

    let readCheck = document.createElement("INPUT");
    readCheck.className = "read-checkbox";
    readCheck.type = "checkbox";
    readCheck.name = "read";
    readCheck.value = "read";
    readCheck.id = "read";
    if(book.read){
      readCheck.checked = true;
    } else {
      readCheck.checked = false;
    }
    readBox.appendChild(readCheck);

    eachBook.appendChild(readBox);

    let removeBook = document.createElement("button");
    removeBook.className = "remove-btn";
    removeBook.appendChild(document.createTextNode("Delete Book"));
    eachBook.appendChild(removeBook);
    removeBook.onclick = () => deleteBook(index);

    library.appendChild(eachBook);
  }
}

render();