import "./App.css";
import { useState } from "react";
import { Book } from "./components/book/book";
import Bookshelf from "./components/Bookshelf/Bookshelf";
import { useContext } from "react";
import { BooksContex } from "./components/Books.context.jsx/Books.context.jsx";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [search, setSearch] = useState("");
  const { books, setBooks } = useContext(BooksContex);

  const handelSearch = (word) => {
    setSearch(word);
    console.log(search);
  };

  const currentlyReading = books.filter((book) => book.value === 0);
  const wantToReading = books.filter((book) => book.value === 1);
  const read = books.filter((book) => book.value === 2);

  const filterd = books.filter(
    (book) =>
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.writer.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filterd);
  // console.log(
  //   currentlyReading,
  //   "currentlyReading",
  //   wantToReading,
  //   "wantToReading",
  //   read,
  //   "read"
  // );

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
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
      ) : (
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
      )}
    </div>
  );
}

export default App;
