const myLibrary = [];
const form = document.forms[0];
const table = document.querySelector('table');

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

    const row = table.insertRow()
    const elements = form.elements;
    const book = new Book(
        elements['title'].value,
        elements['author'].value,
        elements['pages'].value,
        elements['status'].checked
    );

    row.insertCell().textContent = book.title;
    row.insertCell().textContent = book.author;
    row.insertCell().textContent = book.pages;
    row.insertCell().textContent = book.status ? 'read' : 'not read';
    
    // form.reset();
}