import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setSelectedBook(null);
    setRefresh(!refresh);
  };

  return (
    <div className="container">
      <div className="header">
        <h1> Book Management System</h1>
      </div>

      <BookForm
        selectedBook={selectedBook}
        onSuccess={handleSuccess}
      />

      <BookList
        refreshTrigger={refresh}
        onEdit={setSelectedBook}
      />
    </div>
  );
}

export default App;