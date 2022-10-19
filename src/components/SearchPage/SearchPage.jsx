import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "../Bookshelf/Bookshelf";
import Styles from "./SearchPage.module.scss";

const SearchPage = ({
  targetValue,
  books,
  onSetShowSearchpage,
  showSearchPage,
}) => {
  const [search, setSearch] = useState("");

  const filterd = books.filter(
    (book) =>
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.writer.toLowerCase().includes(search.toLowerCase())
  );

  const handelSearch = (word) => {
    setSearch(word);
    console.log(search);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              handelSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <Bookshelf books={filterd} title={"Search Results"} />
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
