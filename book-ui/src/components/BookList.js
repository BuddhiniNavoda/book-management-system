import React, { useState, useEffect } from "react";
import { getBooks, deleteBook } from "../api";

function BookList({ onEdit, refreshTrigger }) {

  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };

  useEffect(() => {
    loadBooks();
  }, [refreshTrigger]);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this book?")) {
      return;
    }

    await deleteBook(id);
    loadBooks();
  };

  return (
    <div className="card">

      <h2>Book List</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {books.map((book) => (
            <tr key={book.id}>

              <td>{book.id}</td>

              <td>{book.title}</td>

              <td>{book.category}</td>

              <td>{book.author}</td>

              <td>${book.price}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() => onEdit(book)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BookList;