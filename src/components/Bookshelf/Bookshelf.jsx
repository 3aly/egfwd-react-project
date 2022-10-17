import React from "react";
import { Book } from "../book/book";

const Bookshelf = ({ books, title }) => {
  return (
    <div className="bookshelf my-3">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return <Book book={book} key={book.id} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
