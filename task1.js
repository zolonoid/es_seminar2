class Book {
    title = "";
    author = "";
    pages = 0;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}`);
    }
}

const book = new Book("Book", "John Doe", 300);
book.displayInfo();
