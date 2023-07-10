let bookDB = [
  {
    title: 'Hamlet',
    author: 'Shakespeare',
  },
  {
    title: 'Deception Point',
    author: 'Dan Brown',
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
  {
    title: 'The Song of Ice and Fire',
    author: 'George R.R. Martin',
  },
];

function retrieveBookDB() {
  const storedBookDB = localStorage.getItem('bookDB');
  if (storedBookDB) {
    bookDB = JSON.parse(storedBookDB);
  }
}

function storeBookDB() {
  localStorage.setItem('bookDB', JSON.stringify(bookDB));
}

function createBookshelf() {
  const bookshelf = document.getElementById('books');
  bookshelf.innerHTML = '';

  for (let i = 0; i < bookDB.length; i += 1) {
    const book = document.createElement('div');
    book.classList.add('singlebook');
    book.innerHTML = `
        <div class="book-detail">${bookDB[i].title} by ${bookDB[i].author}</div>
        <button onclick="removeBook('${bookDB[i].title}', '${bookDB[i].author}')">remove</button>
      `;
    bookshelf.appendChild(book);
  }
}

function clickToAdd() {
  const newTitle = document.getElementById('new-title').value;
  const newAuthor = document.getElementById('new-author').value;
  if (newTitle && newAuthor) {
    const newBook = { title: newTitle, author: newAuthor };
    bookDB.push(newBook);
    storeBookDB();
    createBookshelf();
  } else {
    createBookshelf();
  }
}

function removeBook(title, author) {
  for (let i = 0; i < bookDB.length; i += 1) {
    if (bookDB[i].title === title && bookDB[i].author === author) {
      bookDB.splice(i, 1);
      break;
    }
  }
  storeBookDB();
  createBookshelf();
}

const addButton = document.getElementById('add');
addButton.addEventListener('click', clickToAdd);

// Retrieve bookDB from localStorage on page load
retrieveBookDB();

createBookshelf();
