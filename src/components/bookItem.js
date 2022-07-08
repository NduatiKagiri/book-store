import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { book, deleteBookProps } = props;
  const { id, title, author } = book;

  return (
    <li className="bookItem">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => deleteBookProps(id)}>Delete</button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.node.isRequired,
  deleteBookProps: PropTypes.func.isRequired,
};

export default BookItem;
