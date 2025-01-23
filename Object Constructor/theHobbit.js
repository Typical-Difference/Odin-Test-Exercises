function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${title} by ${author}, ${pages} pages, ${read}`);
    }
}

theHobbit.info();
//The Hobbit by J.R.R Tolkien, 295 pages, not read yet