import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../../BooksAPI";
import Bookshelf from "../Bookshelf/Bookshelf";

const SearchPage = ({
  targetValue,
  books,
  onSetShowSearchpage,
  showSearchPage,
}) => {
  const [searchedbooks, setSearched] = useState([]);

  const handelSearch = (word) => {
    search(word).then((book) => setSearched(book));
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
          <Bookshelf books={searchedbooks} title={"Search Results"} />
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
