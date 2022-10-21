import React from "react";
import { Book } from "../book/book";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";

import dummycover from "../../icons/images.jpg";

const Bookshelf = ({ books, title, isSearch }) => {
  return (
    <div className="bookshelf my-3">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            const title = book.title ? book.title : "Unknown";
            const authors = book.authors ? book.authors : "Not Found";

            const pic =
              book.imageLinks === undefined
                ? dummycover
                : book.imageLinks.thumbnail;
            return (
              <Book
                title={title}
                authors={authors}
                pic={pic}
                key={book.id}
                isSearch={isSearch}
                book={book}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
