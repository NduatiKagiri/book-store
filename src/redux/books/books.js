const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET = 'bookstore/books/GET';

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const bookReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      if (state.find((elem) => elem.item_id === action.book.item_id)) {
        return state;
      }
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.book.item_id);
    case `${GET}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export { addBook, removeBook };
export default bookReducer;
