import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './addBook';
import BooksList from './booksList';

const BooksContainer = () => {
  function getBooks() {
    const books = localStorage.getItem('books');
    const savedBooks = JSON.parse(books);
    return savedBooks || [];
  }

  const [books, setBooks] = useState(getBooks());

  useEffect(() => {
    const toStore = JSON.stringify(books);
    localStorage.setItem('books', toStore);
  }, [books]);

  const delBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  const addBookItem = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="container">
      <div className="inner">
        <BooksList
          books={books}
          deleteBookProps={delBook}
        />
        <AddBook addBookProps={addBookItem} />
      </div>
    </div>
  );
};

export default BooksContainer;
