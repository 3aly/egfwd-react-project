import "./App.css";
import { useState } from "react";
import { Book } from "./components/book/book";
import Bookshelf from "./components/Bookshelf/Bookshelf";
import { useContext } from "react";
import { BooksContex } from "./components/Books.context.jsx/Books.context.jsx";
import SearchPage from "./components/SearchPage/SearchPage";
import { Route } from "react-router-dom";
import { getAll } from "../src/BooksAPI";
import { update } from "../src/BooksAPI";

import { search } from "../src/BooksAPI";

import { Link, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { books, setBooks } = useContext(BooksContex);
  const [bok, setBok] = useState();
  const currentlyReading = books.filter(
    (book) => book.value === "currentlyReading"
  );
  const wantToReading = books.filter((book) => book.value === "wantToRead");
  const read = books.filter((book) => book.value === "read");

  // console.log(
  //   currentlyReading,
  //   "currentlyReading",
  //   wantToReading,
  //   "wantToReading",
  //   read,
  //   "read"
  // );
  let all = [];
  useEffect(() => {
    getAll()
      .then((book, index = 7) => setBok(book))
      .then((bok) => all.push(bok.title))

      .catch((error) => {
        console.log("error");
      });
  }, []);

  console.log(all);

  // const allbooks = bok.map((book, index = 7) => {
  //   setBooks({
  //     name: book.title,
  //     writer: book.authors,
  //     imgurl: book.imageLinks.thumbnail,
  //     id: index++,
  //   });
  // });
  // console.log(allbooks);

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
                  />
                  <Bookshelf books={wantToReading} title={"Want To Read"} />
                  <Bookshelf books={read} title={"Read"} />
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
