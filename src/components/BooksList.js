import React from 'react';
import BooksItem from './BooksItem';

const BooksList = () => (
  <>
    <ul
      style={{
        marginLeft: '0px',
        paddingLeft: '0px',
        listStyle: 'none',
      }}
    >
      <BooksItem />
    </ul>
  </>
);

export default BooksList;
