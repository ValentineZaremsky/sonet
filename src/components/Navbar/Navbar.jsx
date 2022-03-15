import React from 'react';
import { NavLink } from "react-router-dom";
import Friends from './Friends/Friends';
import css from './Navbar.module.css';

const setActive = ({isActive}) => isActive ? css.active : css.link;

const Navbar = (props) => {
  return (
    <nav className={css.nav}>
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
        <a>Music</a>
      </div>
      <div className={css.item}>
        <a>Settings</a>
      </div>

      {/* <Friends friends={props.friendsBlock.friends}/> */}
    </nav>
  )
}

export default Navbar;
