const myLibrary = [];
const form = document.forms[0];
const table = document.querySelector('tbody');

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

    myLibrary.push(book)

    row.insertCell().textContent = book.title;
    row.insertCell().textContent = book.author;
    row.insertCell().textContent = book.pages;
    row.insertCell().textContent = book.read ? 'read' : 'not read';

    const remove = document.createElement('button');
    const change = document.createElement('button');
    remove.innerHTML = `<img src="icons/remove.svg">`;
    change.innerHTML = `<img src="icons/change.svg">`;
    remove.addEventListener('click', removeItem);
    change.addEventListener('click', changeStatus);

    row.insertCell().append(change, remove)    
    form.reset();
}

function removeItem() {
    const row = this.parentElement.parentElement;
    myLibrary.splice(row.rowIndex - 1, 1);
    row.remove();
}

function changeStatus() {
    const row = this.parentElement.parentElement;
    const index = row.rowIndex - 1;
    const cell = row.cells[3];
    myLibrary[index].read = !myLibrary[index].read;
    cell.textContent = myLibrary[index].read ? 'read' : 'not read';
}