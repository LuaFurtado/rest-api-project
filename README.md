# 📚 Book API

This project is part of the **Techtonica curriculum** and focuses on building a **RESTful Book API** using **Node.js**, **Express**, and **PostgreSQL**.

The API serves a curated collection of **Portuguese-language educational books**, with a focus on **literacy, citizenship, social awareness, and early learning**.

## 🌱 Project Context

This project was created to support a real and practical need: organizing educational reading materials for children growing up in a **multilingual and multicultural environment**.

The current dataset includes digital books that address topics such as:

- early literacy in Portuguese  
- children’s rights and citizenship  
- human rights and social values  
- environmental awareness  
- cultural identity and language learning  

Rather than acting as a generic sample API, this project reflects **intentional data choices** aligned with education, accessibility, and social learning.

## 🎯 Project Goals

- Build a RESTful API using **Node.js** and **Express**
- Implement full **CRUD functionality**
- Store and retrieve data from a **PostgreSQL database**
- Design clear and meaningful data models
- Practice **RESTful routing** and HTTP methods
- Test endpoints using **Postman**
- Apply professional **Git and pull request workflows**
- Develop a backend project grounded in a real-world use case

## 🛠 Tech Stack

- Node.js  
- Express  
- JavaScript  
- PostgreSQL  
- Postman  

## 🗄 Database & Data Design

The API uses **PostgreSQL** as its database layer.

The database is seeded with a small, intentional collection of Portuguese-language educational books. Each record includes information such as:

- title  
- author  
- publication year  
- language  
- public domain status  
- short description  
- cover image path  
- PDF file path  

This seed data is used to validate database queries and test all API endpoints.

## 🚀 API Endpoints

### GET /books  
Returns all books stored in the database.

### GET /books/:id  
Returns a specific book by its id.

### POST /books  
Adds a new book using JSON data in the request body.

### PUT /books/:id  
Updates an existing book by id.

### DELETE /books/:id  
Removes a book from the database.

All endpoints were tested using **Postman** to confirm correct behavior.

## ✨ Future Improvements

- Add reading level or age group classification
- Prepare the API for frontend consumption
- Expand the dataset with additional educational titles

## 💛 Final Note

This project represents an intersection between **technical learning and social purpose**.

It reflects my interest in building backend systems that are not only functional, but also intentional, supporting education, language development, and access to knowledge.