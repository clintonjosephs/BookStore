import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import { toogleTheme } from '../redux/loader/theme';
import './styles/NavBar.css';
import ToogleSwitch from './ToogleSwitch';

const NavBar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.themeReducer.theme);

  const handleThemeToogle = (themeStatus) => {
    localStorage.setItem('storeTheme', JSON.stringify({ theme: themeStatus }));
    dispatch(toogleTheme(themeStatus));
  };

  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  const checkedStatus = state !== 'light';
  const changeBackground = state === 'light' ? 'bookNav backDark' : 'bookNav backLight';
  return (
    <>
      <nav className={`${changeBackground}`}>
        <ul>
          <li className="nav-name">Bookstore CMS</li>
          {links.map(({ id, path, text }) => (
            <li key={id}>
              <NavLink
                to={path}
                className="navLink"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  opacity: isActive ? '1' : '0.5',
                  color: state === 'light' ? 'var(--black)' : 'var(--white)',
                })}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        <ToogleSwitch checked={checkedStatus} checkHandler={handleThemeToogle} />
        <div className="avatar">
          <ImUser />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
