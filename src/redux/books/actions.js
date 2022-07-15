import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBookToStore, removeBookFromStore, getStateFromStore } from '../../bookStoreAPI/bookStoreAPI';
import { addBook, removeBook } from './books';

const ASYNC_ADD = 'bookstore/books/ASYNC_ADD';
const ASYNC_REMOVE = 'bookstore/books/ASYNC_REMOVE';
const GET = 'bookstore/books/GET';

const asyncAddBook = createAsyncThunk(
  ASYNC_ADD,
  async (book, { dispatch }) => {
    const response = await addBookToStore(book);
    dispatch(addBook(book));
    return response;
  },
);

const asyncRemoveBook = createAsyncThunk(
  ASYNC_REMOVE,
  async (book, { dispatch }) => {
    const response = await removeBookFromStore(book);
    dispatch(removeBook(book));
    return response;
  },
);

const asyncGetState = createAsyncThunk(
  GET,
  async () => {
    const response = await getStateFromStore();
    return response.books;
  },
);

export { asyncAddBook, asyncGetState, asyncRemoveBook };
