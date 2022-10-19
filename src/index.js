import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BooksProvider } from "./components/Books.context.jsx/Books.context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BooksProvider>
        <App />
      </BooksProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
