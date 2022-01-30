import React from 'react';
import { NavLink } from "react-router-dom";
import css from './../Dialogs.module.css';

const setActive = ({ isActive }) => isActive ? css.active : css.link;

const Dialog = ({ id, name, avatar }) => {
  let path = `/dialogs/${id}`;

  return (
    <div className={css.dialog}>
      <NavLink to={path} className={setActive}>
        <img src={avatar} className={css.avatar} alt={name}/>
        <div className={css.name}>
          {name}
        </div>
      </NavLink>
    </div>
  )
}

export default Dialog;
