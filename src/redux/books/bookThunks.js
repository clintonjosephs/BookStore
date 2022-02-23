import ApiCalls from '../../helpers/ApiCalls';
import { addBook, loadBooks } from './books';

// , removeBook,

export const addBookThunk = (bookItem) => (dispatch) => {
  try {
    ApiCalls.addBooks(bookItem);
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(addBook(bookItem));
  }
};

export const loadBookThunk = () => async (dispatch) => {
  try {
    const response = await ApiCalls.fetchBooks();

    const data = Object.entries(response).map(([key, value]) => {
      const { title, category } = value[0];
      const titleAndName = title.split(';;');
      return {
        id: key,
        title: titleAndName[0],
        author: titleAndName[1],
        category,
      };
    });
    dispatch(loadBooks(data));
  } catch (err) {
    throw new Error(err);
  }
};

export const removeBookThunk = () => () => {
  // call api to store book item
  console.log('i am grateful lord');
  // call dispatch for syncronous actions and pass in payload
};
