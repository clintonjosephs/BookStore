import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './styles/NavBar.css';

const NavBar = () => {
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
  return (
    <>
      <nav className="bookNav">
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
                })}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="avatar">
          <ImUser />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
