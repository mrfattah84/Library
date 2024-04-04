let books = [];
function loadBooks(books){
    let booksContainer = document.querySelector('.booksContainer');
    booksContainer.innerHTML = '';
    books.forEach((book) => {
        let bookElement= `
        <div class="book">
            <button class="remove"><i class="material-icons">cancel</i></button>
            <h3 class="title">${book.title}</h3>
            <p class="author">Author: ${book.author}</p>
            <p class="pages">Number of pages: ${book.pages}</p>
        `;
        if (book.read) {
            bookElement += `
            <p class="green status"><button class="statusChange"><i class="green material-icons">check_circle</i></button><span class="statusText">Already read</span></p>
        </div>`;
        }
        else{
            bookElement += `
            <p class="red status"><button class="statusChange"><i class="grey material-icons">check_circle</i></button><span class="statusText">Haven't read yet</span></p>
        </div>`;
        }
        booksContainer.innerHTML += bookElement;
    });
    let removebtn = document.querySelectorAll('.remove');
    removebtn.forEach(btn=>btn.addEventListener('click', removeBook));
    let statusbtn = document.querySelectorAll('.statusChange');
    statusbtn.forEach(btn=>btn.addEventListener('click', changeStatus));
}
loadBooks(books);

function removeBook(){
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if (book.title == this.parentElement.querySelector('.title').innerText) {
            books.splice(i,1);
        }
    }
    loadBooks(books);
}

function changeStatus(){
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if (book.title == this.parentElement.parentElement.querySelector('.title').innerText) {
            books[i].read = !books[i].read;
        }
    }
    loadBooks(books);
}

const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const addBookbtn = document.querySelector('.AddBook');
const closeDialogbtn = document.querySelector('.close');
addBookbtn.addEventListener('click', () => {
    dialog.showModal();
    form.reset();
});
closeDialogbtn.addEventListener('click', () => dialog.close());

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
form.addEventListener('submit', handleSubmit)

function handleSubmit(){
    books.push({
        'title' : title.value,
        'author' : author.value,
        'pages' : pages.value,
        'read' : read.checked
    })
    loadBooks(books);
}

