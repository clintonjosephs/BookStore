import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBookThunk, removeBookThunk } from '../redux/books/bookThunks';
import BooksItem from './BooksItem';
import Spinner from './Spinner';
import css from './styles/BooksForm.module.css';

let fetched = false;

const BooksList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.booksReducer.books);
  const spinner = useSelector((state) => state.spinnerReducer.status);

  const removeBookFromStore = (bookID) => {
    dispatch(removeBookThunk(bookID));
  };

  useEffect(() => {
    if (!fetched) {
      dispatch(loadBookThunk());
      fetched = true;
    }
  }, []);

  if (spinner) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Spinner width="120px" height="120px" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={css.title} style={{ margin: '2.313rem 6.25rem 0' }}>
        <h2>No books in store yet</h2>
      </div>
    );
  }

  return (
    <>
      <ul
        style={{
          marginLeft: '0px',
          paddingLeft: '0px',
          listStyle: 'none',
        }}
      >
        {data.map(({
          id, title, author, category,
        }) => (
          <BooksItem
            key={id}
            title={title}
            author={author}
            category={category}
            id={id}
            removeBookHandler={removeBookFromStore}
          />
        ))}
      </ul>
    </>
  );
};

export default BooksList;
