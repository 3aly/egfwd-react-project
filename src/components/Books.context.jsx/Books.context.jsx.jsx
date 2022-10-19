import React, { createContext, useState } from "react";

import data from "../../Assets/data";

export const BooksContex = createContext("");

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(data);

  return (
    <BooksContex.Provider value={{ books, setBooks }}>
      {children}
    </BooksContex.Provider>
  );
};
