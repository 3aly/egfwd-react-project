import React, { createContext, useState } from "react";

import data from "../../Assets/data";

export const BooksContex = createContext("");

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [searchedbooks, setSearchedbooks] = useState([]);

  return (
    <BooksContex.Provider
      value={{ books, setBooks, searchedbooks, setSearchedbooks }}
    >
      {children}
    </BooksContex.Provider>
  );
};
