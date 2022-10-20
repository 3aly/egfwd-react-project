import React from "react";
import { useContext } from "react";
import { update, getAll } from "../../BooksAPI.js";
import { BooksContex } from "../Books.context.jsx/Books.context.jsx";

export const Book = ({ book, isSearch }) => {
  const { title, authors, imageLinks } = book;

  const handelClick = (book, newValue, isSearch) => {
    update(book, newValue).then(getAll());
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
                  handelClick(book, "none", isSearch);
                }}
              >
                None Reading
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  handelClick(book, "currentlyReading", isSearch);
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
                  console.log(isSearch);
                  handelClick(book, "wantToRead", isSearch);
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
                  handelClick(book, "read", isSearch);
                }}
              >
                Read
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="book-shelf-changer">
          <select
            value={book.shelf ? book.shelf : "none"}
            onChange={(event) => {
              handelClick(book, event.target.value);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div> */}
      </div>

      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};
