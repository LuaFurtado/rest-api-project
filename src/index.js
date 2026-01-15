import express from "express"
import pool from "./db.js"



const app = express();
const PORT = 3000;

// Middleware that allows the app to read JSON data sent in requests
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Book API is running");
});
// Return all books from the hardcoded data file
app.get("/books", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching books" });
  }
});

app.get("/books/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const result = await pool.query(
      "SELECT * FROM books WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching book" });
  }
});


app.get("/db-books", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books")
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Database error" })
  }
})


// app.post("/books", (req, res) => {
//   books.push(req.body);
//   res.status(201).send("Book added successfully");
// });


app.post("/books", async (req, res) => {
  const {
    title,
    author,
    year,
    language,
    public_domain,
    description,
    cover_url,
    pdf_url
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO books
      (title, author, year, language, public_domain, description, cover_url, pdf_url)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
      [
        title,
        author,
        year,
        language,
        public_domain,
        description,
        cover_url,
        pdf_url
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding book" });
  }
});



app.put("/books/:id", async (req, res) => {
  const id = Number(req.params.id);

  const {
    title,
    author,
    year,
    language,
    public_domain,
    description,
    cover_url,
    pdf_url
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE books
       SET title = $1,
           author = $2,
           year = $3,
           language = $4,
           public_domain = $5,
           description = $6,
           cover_url = $7,
           pdf_url = $8
       WHERE id = $9
       RETURNING *`,
      [
        title,
        author,
        year,
        language,
        public_domain,
        description,
        cover_url,
        pdf_url,
        id
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating book" });
  }
});


app.delete("/books/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const result = await pool.query(
      "DELETE FROM books WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting book" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
