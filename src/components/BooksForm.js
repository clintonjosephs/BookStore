import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Watch } from 'react-loader-spinner';
import { addBookThunk } from '../redux/books/bookThunks';
import css from './styles/BooksForm.module.css';

const BooksForm = () => {
  const setup = () => ({
    id: '',
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();
  const [bookData, setBookData] = useState(setup());
  const [showLoader, setLoaderShow] = useState(false);

  const { title, author, category } = bookData;

  const changeHandler = (event) => {
    setBookData((prevState) => ({
      ...prevState,
      id: uuidv4(),
      [event.target.name]: event.target.value,
    }));
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      setLoaderShow((prevState) => !prevState);
      await dispatch(addBookThunk(bookData));
      setBookData(setup());
      setLoaderShow((prevState) => !prevState);
    }
  };

  let formButton = '';
  if (showLoader === false) {
    formButton = <button type="submit" className={css.formSubmitBtn}>ADD BOOK </button>;
  } else {
    formButton = (
      <div
        style={{
          padding: '0.801rem 1.188rem 0.886rem 1.375rem',
          marginTop: '30px',
        }}
      >
        <Watch
          height="25"
          width="25"
          color="var(--accent-color)"
          ariaLabel="loading"
        />
      </div>
    );
  }

  return (
    <div className={css.wrapper}>
      <div className={css.title}>ADD NEW BOOK</div>
      <form className={css.formstyle} onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          className={css.control}
          value={title}
          required
          onChange={changeHandler}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          className={css.control}
          value={author}
          required
          onChange={changeHandler}
        />
        <select
          name="category"
          className={css.control}
          value={category}
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
        { formButton }
      </form>
    </div>
  );
};

export default BooksForm;
