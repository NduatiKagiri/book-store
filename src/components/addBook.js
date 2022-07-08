import React, { useState } from 'react';

const AddBook = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim() && inputText.author.trim()) {
      props.addBookProps(inputText.title, inputText.author);
      setInputText({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Enter Title..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <input
        type="text"
        className="input-author"
        placeholder="Enter author..."
        value={inputText.author}
        name="author"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

export default AddBook;
