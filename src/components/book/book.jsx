import React from "react";
import { useContext } from "react";
import { update } from "../../BooksAPI.js";
import { BooksContex } from "../Books.context.jsx/Books.context.jsx";

export const Book = ({ book, id }) => {
  const { title, authors, imageLinks } = book;
  const { books, setBooks } = useContext(BooksContex);

  const handelClick = (book, newValue) => {
    // const newState = books.map((obj) => {
    //   if (obj.id === book.id) {
    //     return { ...obj, shelf: newValue };
    //   }

    //   // 👇️ otherwise return object as is
    //   return obj;
    // });
    update(book, newValue).then((res) => {
      console.log(res);
      setBooks(book);
    });
  };

  return (
    <div className="book mx-2">
      <div className="book-top">
        <img
          className="book-cover"
          style={{
            width: 128,
            height: 193,
          }}
          src={imageLinks.thumbnail}
        />
        <div class="dropdown  book-shelf-changer">
          <a
            class="btn btn-secondary dropdown-toggle bg-success rounded-circle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></a>

          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  handelClick(id, "currentlyReading");
                }}
              >
                Currently Reading
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  handelClick(id, "wantToRead");
                }}
              >
                want To Reading
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  handelClick(id, "read");
                }}
              >
                Read
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};
