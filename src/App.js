import "./App.css";
import { useState } from "react";
import { Book } from "./components/book/book";
import Bookshelf from "./components/Bookshelf/Bookshelf";
import { useContext } from "react";
import { BooksContex } from "./components/Books.context.jsx/Books.context.jsx";
import SearchPage from "./components/SearchPage/SearchPage";
import { Route } from "react-router-dom";
import { getAll } from "../src/BooksAPI";

import { Link, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { books, setBooks } = useContext(BooksContex);
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToReading = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  useEffect(() => {
    getAll()
      .then((book) => {
        setBooks(book);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [books]);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/search" element={<SearchPage books={books} />} />
        <Route
          path="/"
          element={
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf
                    books={currentlyReading}
                    title={"Currently Reading"}
                    isSearch={false}
                  />

                  <Bookshelf
                    books={wantToReading}
                    title={"Want To Read"}
                    isSearch={false}
                  />
                  <Bookshelf books={read} title={"Read"} isSearch={false} />
                </div>
              </div>
              <div className="open-search">
                <Link to={"search"}></Link>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
