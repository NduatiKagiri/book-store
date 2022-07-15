import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';
import { asyncGetState } from './books/actions';

const initialData = {
  books: [],
  categories: [],
};

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialData,
});

store.dispatch(asyncGetState());

export default store;
