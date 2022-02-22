import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import css from './styles/BooksForm.module.css';

const BooksForm = () => {
  const dispatch = useDispatch();

  let newBook = {
    id: '',
    title: '',
    author: '',
    category: '',
  };

  const changeHandler = (event) => {
    newBook = {
      ...newBook,
      id: uuidv4(),
      [event.target.name]: event.target.value,
    };
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (newBook.title.trim() !== '' && newBook.author.trim() !== '') {
      dispatch(addBook(newBook));
      event.target.reset();
    } else {
      console.log('i got here');
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.title}>ADD NEW BOOK</div>
      <form className={css.formstyle} onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          className={css.control}
          required
          onChange={changeHandler}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          className={css.control}
          required
          onChange={changeHandler}
        />
        <select
          name="category"
          className={css.control}
          defaultValue=""
          required
          onChange={changeHandler}
        >
          <option value="" hidden>
            Category
          </option>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="drama">Drama</option>
          <option value="poetry">Poetry</option>
          <option value="romance">Romance</option>
          <option value="horror">Horror</option>
        </select>
        <button type="submit" className={css.formSubmitBtn}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BooksForm;
