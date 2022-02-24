import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';
import spinnerReducer from './loader/spinner';
import themeReducer from './loader/theme';

const reducer = combineReducers({
  booksReducer,
  spinnerReducer,
  themeReducer,
});

// creating a store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
