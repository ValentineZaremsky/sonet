import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as GlobeIcon } from '../../assets/icons/Globe.svg';
import css from './Header.module.css';

const Header = ({isAuth, login, logout}) => {
  return (
    <header className={css.header}>
      <NavLink to={'/'}>
        <GlobeIcon className={css.logo}/>
      </NavLink>
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
