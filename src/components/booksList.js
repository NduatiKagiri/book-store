import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './bookItem';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
