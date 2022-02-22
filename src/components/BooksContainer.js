import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
import BooksList from './BooksList';
import BooksForm from './BooksForm';
import './styles/BooksContainer.css';

const BooksContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.booksReducer);

  const addBookToStore = (bookItem) => {
    dispatch(addBook(bookItem));
  };

  const removeBookFromStore = (bookID) => {
    dispatch(removeBook(bookID));
  };

  return (
    <>
      <BooksList handleRemoveBook={removeBookFromStore} bookData={data} />
      <div className="divider" />
      <BooksForm handleSubmitEvent={addBookToStore} />
    </>
  );
};

export default BooksContainer;
