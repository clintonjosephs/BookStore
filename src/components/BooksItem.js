import React from 'react';
import styles from './styles/BooksItem.module.css';

const BooksItem = () => (
  <>
    <li className={styles.listItem}>
      <ul className={styles.itemsList}>
        <li>
          {' '}
          <p className={styles.bookTopic}>Action</p>
          <h2>The Hunger Games</h2>
          <span className={styles.author}>Suzanne Collins</span>
          <ul
            style={{
              marginTop: '55px',
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'row',
              cursor: 'pointer',
            }}
          >
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </li>
        <li>
          <div>circle</div>
          <div>64% Completed</div>
        </li>
        <li style={{ marginLeft: '50px', borderLeft: 'solid 2px var(--border-color)' }}>
          <p className={styles.chapter}>CURRENT CHAPTER</p>
          <p className={styles.lesson}>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </li>
      </ul>
    </li>
  </>
);

export default BooksItem;
