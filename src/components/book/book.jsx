import React from "react";
import { useContext } from "react";
import { BooksContex } from "../Books.context.jsx/Books.context.jsx";

export const Book = ({ book }) => {
  const { name, writer, imgurl } = book;
  const { books, setBooks } = useContext(BooksContex);

  const handelClick = (id, newValue) => {
    const newState = books.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: newValue };
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setBooks(newState);
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
          src={imgurl}
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
                  handelClick(book.id, 0);
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
                  handelClick(book.id, 1);
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
                  handelClick(book.id, 2);
                }}
              >
                Read
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="book-title">{name}</div>
      <div className="book-authors">{writer}</div>
    </div>
  );
};
