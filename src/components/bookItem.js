import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const { book } = props;
  const { id, title, author } = book;

  const dispatch = useDispatch();
  const handleRemove = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <li className="bookItem">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" id={`remove-${id}`} onClick={() => handleRemove(book)}>Delete</button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.node.isRequired,
};

export default BookItem;
