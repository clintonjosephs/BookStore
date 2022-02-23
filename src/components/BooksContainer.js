import React from 'react';
import BooksList from './BooksList';
import BooksForm from './BooksForm';
import './styles/BooksContainer.css';

const BooksContainer = () => (
  <>
    <BooksList />
    <div className="divider" />
    <BooksForm />
  </>
);

export default BooksContainer;
