import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';
import BooksContainer from './components/BooksContainer';
import NavBar from './components/NavBar';
import styles from './components/styles/App.module.css';

const App = () => {
  const state = useSelector((state) => state.themeReducer.theme);

  const background = state === 'light' ? styles.bgLight : styles.bgDark;

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        border: 'solid 1px transparent',
      }}
      className={background}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
