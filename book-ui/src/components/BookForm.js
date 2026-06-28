import React, { useState, useEffect } from "react";
import { createBook, updateBook } from "../api";

function BookForm({ selectedBook, onSuccess }) {

  const [book, setBook] = useState({
    title: "",
    category: "",
    author: "",
    price: ""
  });

  useEffect(() => {
    if (selectedBook) {
      setBook(selectedBook);
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (book.id) {
      await updateBook(book.id, book);
    } else {
      await createBook(book);
    }

    setBook({
      title: "",
      category: "",
      author: "",
      price: ""
    });

    onSuccess();
  };

  return (
    <div className="card">

      <h2>
        {book.id ? "Edit Book" : "Add New Book"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price}
          onChange={handleChange}
          required
        />

        <button className="save-btn">
          {book.id ? "Update Book" : "Save Book"}
        </button>

      </form>
    </div>
  );
}

export default BookForm;