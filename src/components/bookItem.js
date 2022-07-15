import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncRemoveBook } from '../redux/books/actions';

const BookItem = (props) => {
  const { book } = props;
  const {
    id, title, author, category,
  } = book;

  const dispatch = useDispatch();
  const handleRemove = (book) => {
    dispatch(asyncRemoveBook(book)).then((response) => {
      const resp = document.getElementById('resp');
      resp.innerHTML = response.payload;
    });
  };

  return (
    <>
      <li className="bookItem">
        <div className="bookInfo">
          <div className="bookDetails">
            <p className="category">{category}</p>
            <h5 className="title">{title}</h5>
            <p className="author">{author}</p>
          </div>
          <div className="bookButtons">
            <button type="button" id={`comments-${id}`}>Comments</button>
            <button type="button" id={`remove-${id}`} onClick={() => handleRemove(book)}>Remove</button>
            <button type="button" id={`edit-${id}`}>Edit</button>
          </div>
        </div>
        <div className="status">
          <div
            className="progressBar"
            role="progressbar"
            aria-label="Progress"
            aria-valuenow="64"
            aria-valuemin="0"
            aria-valuemax="100"
          />
          <div className="completedStatus">
            <h5>64%</h5>
            <p>Completed</p>
          </div>
        </div>
        <div className="chapter">
          <h6>Current Chapter</h6>
          <p>Chapter 3</p>
          <button type="button">update progress</button>
        </div>
      </li>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.node.isRequired,
};

export default BookItem;
