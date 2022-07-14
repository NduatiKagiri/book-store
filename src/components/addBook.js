import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value && e.target.author.value) {
      const book = {
        id: uuidv4(),
        title: e.target.title.value,
        author: e.target.author.value,
      };
      dispatch(addBook(book));
      e.target.title.value = '';
      e.target.author.value = '';
    }
  };

  return (
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
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

export default AddBook;
