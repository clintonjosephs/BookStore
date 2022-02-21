import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles/BooksItem.module.css';

const BooksItem = () => {
  const percentage = Math.floor(Math.random() * 99);
  return (
    <>
      <li className={styles.listItem}>
        <ul className={styles.itemsList}>
          <li className={styles.flexBig}>
            {' '}
            <p className={styles.bookTopic}>Action</p>
            <h2>The Hunger Games</h2>
            <span className={styles.author}>Suzanne Collins</span>
            <ul className={styles.innerList}>
              <li>Comments</li>
              <li>Remove</li>
              <li>Edit</li>
            </ul>
          </li>
          <li
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div className={styles.barContainer}>
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  pathColor: 'var(--accent-color)',
                })}
              />
            </div>
            <div>
              <p className={styles.percentComplete}>
                {' '}
                {`${percentage}%`}
              </p>
              <p className={styles.completed}>Completed</p>
            </div>
          </li>
          <li className={styles.lastList}>
            <p className={styles.chapter}>CURRENT CHAPTER</p>
            <p className={styles.lesson}>Chapter 17</p>
            <button type="button">UPDATE PROGRESS</button>
          </li>
        </ul>
      </li>
    </>
  );
};
export default BooksItem;
