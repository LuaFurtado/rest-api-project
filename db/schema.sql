CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  year INT,
  language TEXT,
  public_domain BOOLEAN,
  description TEXT,
  cover_url TEXT,
  pdf_url TEXT
);