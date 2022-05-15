import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as UserPhoto } from '../../../assets/icons/avatar-male.svg';
import css from "./User.module.css";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={css.user}>
      <div className={css.leftSide}>
        <div className={css.photo}>
          <NavLink to={`/profile/${user.id}`}>
            { user.photos.small
              ? <img className={css.avatar} src={user.photos.small} alt="Avatar" />
              : <UserPhoto className={css.avatar}/>
            }
          </NavLink>
        </div>
        <div>
          { user.followed
            ? <button
                disabled={followingInProgress.includes(user.id)}
                onClick={() => {unfollow(user.id)}}>
                Unfollow
              </button>
            : <button
                disabled={followingInProgress.includes(user.id)}
                onClick={() => {follow(user.id)}}>
                Follow
              </button>
          }
        </div>
      </div>
      <div className={css.rightSide}>
        <div className={css.info}>
          <div className={css.name}>{user.name}</div>
          { user.status
            ? <div className={css.status}>{user.status}</div>
            : <div className={css.email}>{"\u00A0"}</div>
          }
        </div>
        <div className={css.location}>
          <div>{false ? "user.location.country" : "\u00A0"}</div>
          <div>{false ? "user.location.city" : "\u00A0"}</div>
        </div>
      </div>
    </div>
  )
}

export default User;
