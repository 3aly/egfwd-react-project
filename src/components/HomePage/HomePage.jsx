import React from "react";
import { useContext } from "react";
import Bookshelf from "../Bookshelf/Bookshelf";
import Styles from "./HomePage.module.scss";
import { BooksContex } from "./components/Books.context.jsx/Books.context.jsx";

const HomePage = () => {
  const { books, setBooks } = useContext(BooksContex);

  const currentlyReading = books.filter((book) => book.value === 0);
  const wantToReading = books.filter((book) => book.value === 1);
  const read = books.filter((book) => book.value === 2);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf books={currentlyReading} title={"Currently Reading"} />
          <Bookshelf books={wantToReading} title={"Want To Read"} />
          <Bookshelf books={read} title={"Read"} />
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
};

export default HomePage;
