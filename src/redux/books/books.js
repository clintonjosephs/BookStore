const ADD_BOOK = 'BOOKSTORE/BOOKS/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/BOOKS/REMOVE_BOOK';
const LOAD_BOOKS = 'BOOKSTORE/BOOKS/LOAD_BOOKS';
// initialize state
const initialState = {
  books: [],
};

// actions
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// write reducers / manager of store
const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_BOOK:
      return { books: [...state, payload] };
    case REMOVE_BOOK:
      return { books: state.filter((book) => book.id !== payload) };
    case LOAD_BOOKS:
      return { books: [...payload] };
    default:
      return state;
  }
};

export default reducer;
