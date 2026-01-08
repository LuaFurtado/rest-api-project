import express from "express";
import books from "./data/books.js";


const app = express();
const PORT = 3000;

// Middleware that allows the app to read JSON data sent in requests
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Book API is running");
});
// Return all books from the hardcoded data file
app.get("/books", (req, res) => {
    res.json(books);
});

app.get("/books/:id", (req, res) => {
    // Get the id from the URL and convert it to a number
    const id = Number(req.params.id);
    // Find the book that matches the given id
    const book = books.find(book => book.id === id);
    if (book) {
        res.json(book);
    } else {
        // Send a 404 error if the book does not exist
        res.status(404).json({ message: "Book not found" });
    }
});

app.post("/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        ...req.body // Add all properties from req.body (sent by the client) to the new book
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex !== -1) {
        // Update the book with new data from req.body
        books[bookIndex] = {
            ...books[bookIndex],
            ...req.body
        };

        res.json(books[bookIndex]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

app.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex !== -1) {
        // Remove the book from the array
        books.splice(bookIndex, 1);
        res.json({ message: "Book deleted successfully" });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});