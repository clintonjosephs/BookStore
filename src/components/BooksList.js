import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BooksItem from './BooksItem';
import css from './styles/BooksForm.module.css';

const BooksList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.booksReducer);

  const removeBookFromStore = (bookID) => {
    dispatch(removeBook(bookID));
  };

  return (
    <>
      <ul
        style={{
          marginLeft: '0px',
          paddingLeft: '0px',
          listStyle: 'none',
        }}
      >
        {
          data.length > 0 ? data.map(({
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
          )) : <li className={css.title} style={{ margin: '2.313rem 6.25rem 0' }}><h2>No books in the library yet</h2></li>
        }
      </ul>
    </>
  );
};

export default BooksList;
