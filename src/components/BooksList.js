import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BooksItem from './BooksItem';

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
