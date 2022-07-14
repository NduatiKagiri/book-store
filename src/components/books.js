import React from 'react';
import AddBook from './addBook';
import BooksList from './booksList';

const BooksContainer = () => (
  <div className="container">
    <div className="inner">
      <BooksList />
      <AddBook />
    </div>
  </div>
);

export default BooksContainer;
