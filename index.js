import express from "express";
import books from "./data/books.js";


const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Book API is running");
});

app.get("/books", (req, res) => {
    res.json(books);
    });

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(book => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.post("/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        ...req.body
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
