import ApiCalls from '../../helpers/ApiCalls';
import { addBook, loadBooks, removeBook } from './books';

export const addBookThunk = (bookItem) => async (dispatch) => {
  try {
    const response = await ApiCalls.addBooks(bookItem);
    if (response) {
      dispatch(addBook(bookItem));
    }
  } catch (err) {
    throw new Error(err);
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

export const removeBookThunk = (id) => async (dispatch) => {
  try {
    const response = await ApiCalls.removeBooks(id);
    console.log(response, 'my response');
    if (response) {
      dispatch(removeBook(id));
    }
  } catch (err) {
    throw new Error(err);
  }
};
