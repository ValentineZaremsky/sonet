import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = ({isAuth, login, logout}) => {
  return (
    <header className={css.header}>
      <img alt='Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Blue_globe_icon.svg/2000px-Blue_globe_icon.svg.png' />
      <div className={css.headName}>
        IT-Kamasutra
      </div>
      <div className={css.loginBlock}>
        { isAuth
          ? <>
              <span>Hello, {login}!</span>
              <button onClick={logout}>Log out</button>
            </>
          : <NavLink to={'/login'}>Log in</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;
