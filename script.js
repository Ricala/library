
const library = document.querySelector(".library");
const readBtn = document.getElementsByClassName("read-btn")
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const notRead = document.getElementById("book-not-read");
const read = document.getElementById("book-read");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  switchRead(read) {
    if(read) this.read = false;
    else this.read = true;
  };
}

class Library {

  constructor(myLibrary) {
    this.myLibrary = myLibrary;
  }

  addBookToLibrary(book) {
    this.myLibrary.push(book)
    this.render();
  }

  deleteBook(book) {
    let result = confirm(`Delete '${this.myLibrary[book].title}'?`);
    if(result) this.myLibrary.splice(book, 1);
    this.render();
  }

  render() {
    library.innerHTML = "";
  
    //render each book in MyLibrary with title, author, pages, buttons
    for (const [index, book] of this.myLibrary.entries()) {
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
  
      let readBtn = document.createElement('button');
      readBtn.className="read-btn-both";
  
      //Assign button read or not read
      if(book.read){
        readBtn.className = "read-btn read-btn-both";
        readBtn.appendChild(document.createTextNode("READ"));
      } else{
        readBtn.className = "not-read-btn read-btn-both";
        readBtn.appendChild(document.createTextNode("NOT READ"));
      };
      eachBook.appendChild(readBtn);
  
      //switch status read book
      readBtn.onclick = () => {
        book.switchRead(book.read); 
        this.render();
      }
        
      //delete book
      let removeBook = document.createElement("button");
      removeBook.className = "remove-btn";
      removeBook.appendChild(document.createTextNode("🗑️"));
      eachBook.appendChild(removeBook);
      removeBook.onclick = () => this.deleteBook(index);
      
      library.appendChild(eachBook);
    }
  }
}



const main = (() => {
  let emptyLibrary = [];
  let library = new Library(emptyLibrary);
  let submitBtn = document.getElementById("submit-btn");

  let initialBooks = (() => {
    let lotr = new Book('The Lord of the Rings','J. R. R. Tolkien', 151, true);
    let ofMiceAndMen = new Book('Of Mice and Men', 'John Steinbeck', 187, false);
    let harryPotter = new Book('Harry Potter and the Goblet of Fire','J.K. Rowling', 796, true);
    library.addBookToLibrary(lotr);
    library.addBookToLibrary(ofMiceAndMen);
    library.addBookToLibrary(harryPotter);
  })();

  class Form {
    constructor(){
      this.submitBtn = submitBtn;
    }

    formHandler() {
      submitBtn.addEventListener ('click' , function () {
        //Check that values are entered
        if(title.value == "" || author.value == "" || pages.value == "") {
          alert("Please enter a value for each field");
          return;
          //Check pages input is a number
        } else if (isNaN(pages.value)){
          alert("Please enter a number for pages")
          pages.value = "";
          return;
          //Create new book
        } else {
          let isRead = false;
          if(read.checked)isRead = true;
          
          let createdBook = new Book(title.value, author.value, pages.value, isRead);
          library.addBookToLibrary(createdBook);
          clearInputs();
        }

        function clearInputs() {
        title.value = "";
        author.value = "";
        pages.value = "";
        notRead.checked = true;
      }
      });
    }
  }

  let form = new Form();
  form.formHandler();
  library.render();
})();
