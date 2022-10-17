import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BooksProvider } from "./components/Books.context.jsx/Books.context.jsx";

ReactDOM.render(
  <React.StrictMode>
    <BooksProvider>
      <App />
    </BooksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
