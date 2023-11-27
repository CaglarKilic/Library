const myLibrary = [];
const form = document.forms[0];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `${this.title} by ${this.author}, ${pages} pages, ` + (this.read ? 'read' : 'not read yet');
        };
    }
}

form.addEventListener('submit', addBook);
function addBook(event) {
    event.preventDefault();

    const elements = form.elements;
    myLibrary.push(new Book(
        elements['title'].value,
        elements['author'].value,
        elements['pages'].value,
        elements['status'].checked
    ))

    form.reset();
}