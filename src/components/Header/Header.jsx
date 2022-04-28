import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/Globe.svg';
import css from './Header.module.css';

const Header = ({isAuth, login, logout}) => {
  return (
    <header className={css.header}>
      <div className={css.logoBlock}>
        <NavLink to={'/'}>
          <Logo className={css.logo}/>
        </NavLink>
        <div className={css.headName}>
          <span className={css.head1st}>SO</span>
          <span className={css.head2nd}>NET</span>
        </div>
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
