import React from 'react';
import BookItem from './bookItem';

const BooksList = (props) => (
  <ul>
    {props.books.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        deleteBookProps={props.deleteBookProps}
      />
    ))}
  </ul>
);
export default BooksList;
