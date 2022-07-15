import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { asyncAddBook } from '../redux/books/actions';

const AddBook = () => {
  const dispatch = useDispatch();
  const resp = document.getElementById('resp');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value && e.target.author.value) {
      const book = {
        item_id: uuidv4(),
        title: e.target.title.value,
        author: e.target.author.value,
        category: 'Fiction',
      };
      dispatch(asyncAddBook(book)).then((response) => {
        e.target.title.value = '';
        e.target.author.value = '';
        resp.innerHTML = response.payload;
      });
    }
  };

  return (
    <div className="form-sec">
      <h5>add new book</h5>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Enter Title..."
          name="title"
        />
        <input
          type="text"
          className="input-author"
          placeholder="Enter author..."
          name="author"
        />
        <button type="submit" className="input-submit">Add new book</button>
      </form>
      <p id="resp" />
    </div>
  );
};

export default AddBook;
