import React from 'react';
import css from './styles/BooksForm.module.css';

const BooksForm = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.title}>ADD NEW BOOK</div>
      <form method="POST" className={css.formstyle}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          className={css.control}
          required
        />
        <select name="category" className={css.control} defaultValue="" required>
          <option value="" hidden>
            Category
          </option>
          <option value="sci-fi">
            Sci-fi
          </option>
          <option value="drama">
            Drama
          </option>
          <option value="poetry">
            Category
          </option>
        </select>
        <button type="submit" onClick={formSubmitHandler}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BooksForm;
