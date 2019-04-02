let title, author, pages, read;

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

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
console.log(theHobbit.info());