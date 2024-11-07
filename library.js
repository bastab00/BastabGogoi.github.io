class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library {
    constructor() {
        this.library = [];
    }

    // Add book information
    addBook() {
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const year = parseInt(document.getElementById("year").value, 10);

        if (this.library.length < 100) {
            this.library.push(new Book(title, author, year));
            this.displayMessage("Book added successfully!");
            this.clearForm();
        } else {
            this.displayMessage("Library is full. Cannot add more books.");
        }
    }

    // Display all book information
    displayBooks() {
        if (this.library.length === 0) {
            this.displayMessage("No books in the library.");
            return;
        }
        
        const booksUl = document.getElementById("books");
        booksUl.innerHTML = ''; // Clear existing list
        this.library.forEach((book) => {
            const li = document.createElement("li");
            li.textContent = `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`;
            booksUl.appendChild(li);
        });
        document.getElementById("book-list").style.display = "block";
    }

    // List all books by a given author
    listBooksByAuthor() {
        const authorName = document.getElementById("author-name").value;
        let found = false;

        const authorListUl = document.getElementById("author-list");
        authorListUl.innerHTML = ''; // Clear existing list
        
        this.library.forEach((book) => {
            if (book.author.toLowerCase() === authorName.toLowerCase()) {
                const li = document.createElement("li");
                li.textContent = `Title: ${book.title}, Year: ${book.year}`;
                authorListUl.appendChild(li);
                found = true;
            }
        });

        if (!found) {
            this.displayMessage("No books found by this author.");
        } else {
            document.getElementById("author-books").style.display = "block";
        }
    }

    // Count the number of books in the library
    countBooks() {
        this.displayMessage(`Total number of books in the library: ${this.library.length}`);
    }

    // Display a message to the user
    displayMessage(message) {
        document.getElementById("message").textContent = message;
    }

    // Clear the input form
    clearForm() {
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("year").value = '';
        document.getElementById("author-name").value = '';
    }
}

// Initialize the library system
const library = new Library();

function addBook() {
    // Show form to enter book details
    const bookForm = `
        <h3>Enter Book Details</h3>
        <label for="title">Title:</label>
        <input type="text" id="title" required>
        <label for="author">Author:</label>
        <input type="text" id="author" required>
        <label for="year">Year:</label>
        <input type="number" id="year" required>
        <button onclick="library.addBook()">Add Book</button>
    `;
    document.getElementById("message").innerHTML = bookForm;
}

function displayBooks() {
    library.displayBooks();
}

function listBooksByAuthor() {
    const authorForm = `
        <h3>Enter Author Name</h3>
        <label for="author-name">Author Name:</label>
        <input type="text" id="author-name" required>
        <button onclick="library.listBooksByAuthor()">Search Books</button>
    `;
    document.getElementById("message").innerHTML = authorForm;
}

function countBooks() {
    library.countBooks();
}

function exitProgram() {
    alert("Exiting the program.");
    window.close(); // This will only work on some browsers
}

