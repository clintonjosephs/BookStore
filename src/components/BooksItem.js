import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles/BooksItem.module.css';

const BooksItem = ({
  id, title, author, category, removeBookHandler,
}) => {
  const [percentage, setPercentage] = useState(Math.floor(Math.random() * 99));

  const improvedProgress = () => {
    setPercentage((prevPercent) => {
      if (prevPercent < 100) {
        if ((prevPercent + 10) <= 100) {
          return prevPercent + 10;
        }
        const final = 100 - prevPercent;
        return prevPercent + final;
      }
      return prevPercent;
    });
  };

  const capitalizeFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <li className={styles.listItem}>
        <ul className={styles.itemsList}>
          <li className={styles.flexBig}>
            {' '}
            <p className={styles.bookTopic}>{capitalizeFirstChar(category)}</p>
            <h2>{title}</h2>
            <span className={styles.author}>{author}</span>
            <ul className={styles.innerList}>
              <li>Comment</li>
              <li>
                <button
                  type="button"
                  onClick={() => removeBookHandler(id)}
                  style={{
                    background: 'none', border: 'none', color: 'var(--accent-color-actions)', cursor: 'pointer',
                  }}
                >
                  Remove
                </button>
              </li>
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
            <p className={styles.lesson}>
              Chapter
              {' '}
              {' '}
              {percentage}
            </p>
            <button type="button" className={styles.btn} onClick={improvedProgress}>
              UPDATE PROGRESS
            </button>
          </li>
        </ul>
      </li>
    </>
  );
};

BooksItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBookHandler: PropTypes.func.isRequired,
};

export default BooksItem;
