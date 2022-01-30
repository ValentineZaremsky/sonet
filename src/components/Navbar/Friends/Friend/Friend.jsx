import React from 'react';
import { NavLink } from "react-router-dom";
import css from './../Friends.module.css';

const Friend = ({ id, name, avatar }) => {
  let path = `/friends/${id}`;

  return (
    <div className={css.friend}>
      <NavLink to={path}>
        <img src={avatar} className={css.avatar} alt={name}/>
        <div className={css.name}>
          {name}
        </div>
      </NavLink>
    </div>
  )
}

export default Friend;
