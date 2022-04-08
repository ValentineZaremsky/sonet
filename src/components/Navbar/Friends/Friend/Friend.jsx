import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as UserPhoto } from '../../../../assets/icons/avatar-male.svg';
import css from './../Friends.module.css';

const Friend = ({ id, name, avatar }) => {
  let path = `/profile/${id}`;

  return (
    <div className={css.friend}>
      <NavLink to={path}>
        <div className={css.photo}>
          { avatar
            ? <img src={avatar} className={css.avatar} alt={name}/>
            : <UserPhoto className={css.avatar}/>
          }
        </div>
        <div className={css.name}>
          {name}
        </div>
      </NavLink>
    </div>
  )
}

export default Friend;
