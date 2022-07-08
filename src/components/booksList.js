import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './bookItem';

const BooksList = (props) => {
  const { books, deleteBookProps } = props;
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          deleteBookProps={deleteBookProps}
        />
      ))}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.node.isRequired,
  deleteBookProps: PropTypes.func.isRequired,
};

export default BooksList;
