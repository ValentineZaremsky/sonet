import React from 'react';
import { NavLink } from "react-router-dom";
import FriendsContainer from './Friends/FriendsContainer';
import css from './Navbar.module.css';

const setActive = ({isActive}) => isActive ? css.active : css.link;

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.menu}>
        <div className={css.item}>
          <NavLink to='/profile' className={setActive}>Profile</NavLink>
        </div>
        <div className={css.item}>
          <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
        </div>
        <div className={css.item}>
          <NavLink to='/users' className={setActive}>Users</NavLink>
        </div>
        <div className={css.item}>
          <NavLink to='/news' className={setActive}>News</NavLink>
        </div>
        <div className={css.item}>
          <a href="#top">Music</a>
        </div>
        <div className={css.item}>
          <a href="#top">Settings</a>
        </div>
      </div>

      <FriendsContainer/>
    </nav>
  )
}

export default Navbar;
