import React from 'react';

const BookItem = (props) => {

  const { id, title, author } = props.book;

  return (
    <li className="bookItem">
      <p>{title}</p>
      <p>{author}</p>
      <button onClick={() => props.deleteBookProps(id)}>Delete</button>
    </li>
  );
};

export default BookItem;
