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
  res.send("Get book by id");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
