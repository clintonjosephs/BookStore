import React from 'react';
import styles from './styles/BooksItem.module.css';

const BooksItem = () => (
  <>
    <li className={styles.listItem}>Harry Potter</li>
    <li className={styles.listItem}>Pirates of the carrebian</li>
  </>
);

export default BooksItem;
