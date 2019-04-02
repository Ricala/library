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


function deleteBook(book) {
console.log("button works");
myLibrary.splice(book, 1);
render();
}

let theHobbit = new Book('dog','mom',234,true);
let theDog = new Book('bog','mom',234,false);
addBookToLibrary(theHobbit);
addBookToLibrary(theDog);

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

    let readLabel = document.createElement('label');
    readLabel.className = "read-label"
    readLabel.htmlfor = "read";
    readLabel.appendChild(document.createTextNode("Read"));

    eachBook.appendChild(readCheck);
    eachBook.appendChild(readLabel);

    let removeBook = document.createElement("button");
    removeBook.className = "remove-btn";
    removeBook.appendChild(document.createTextNode("Delete Book"));
    eachBook.appendChild(removeBook);
    removeBook.onclick = () => deleteBook(index);

    library.appendChild(eachBook);
  }
}

render();