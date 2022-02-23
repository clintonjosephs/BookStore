import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import BooksContainer from './components/BooksContainer';
import NavBar from './components/NavBar';
import './index.css';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
