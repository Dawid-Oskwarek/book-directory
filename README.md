# Book Directory Application
This was a small project that I undertook to improve my skills in JavaScript. The project involved creating both a backend and a frontend service using Node.js, Express.js and React.

# Backend
This service allows users to add, edit, and delete books from a directory. It is built using Node.js and Express.js and uses a JSON file as a "database". This is running on port 3001 and can be used without the frontend application.

## Getting Started
- Clone the repository.
- Navigate to the api folder in your terminal.
- Run `npm install` to install the necessary packages.
- Run `npm run start` to start the backend service.

## APIs
This application has the following APIs:

### GET /books
Retrieves a list of all books in the directory.

### GET /books/:id
Retrieves a specific book by ID.

#### Parameters
- `id`: The ID of the book to retrieve.

### POST /books
Adds a new book to the directory.

#### Request Body
- `name`: The name of the book.
- `genre`: The genre of the book.

### PUT /books/:id
Updates an existing book by ID.

#### Parameters
- `id`: The ID of the book to update.

#### Request Body
- `name`: The new name of the book.
- `genre`: The new genre of the book.

### DELETE /books/:id
Deletes a book by ID.

#### Parameters
- `id`: The ID of the book to delete.




# Frontend

This is a React application that uses APIs for its functionality. It allows users to view, add, and edit books. It runs on port 3000. Note: this will not work without the backend service running on port 3001.

## Getting started

- Clone the repository.
- Navigate to the ui folder in your terminal.
- Run `npm install` to install the necessary packages.
- Run `npm run start` to start the frontend service.

## Pages

### View Books

This page displays a table of all the books in the database. Users can click the edit button to edit a book or the delete button to delete a book.

### Add Book

This page allows users to add a new book to the database. Users can enter the book's name and genre, and then click the submit button to add the book.

### Edit Book

This page allows users to edit an existing book in the database. When users click the edit button on the View Books page, they are taken to this page, where they can edit the book's name and genre.

## API

The application uses the following API endpoints:

- `GET /books`: Gets a list of all books in the database.
- `POST /books`: Adds a new book to the database.
- `GET /books/:id`: Gets the details of a specific book.
- `PUT /books/:id`: Updates the details of a specific book.
- `DELETE /books/:id`: Deletes a specific book from the database.


# Credits
This application was created by Dawid Oskwarek.
