import React from 'react';
import { NavLink } from 'react-router-dom';
// import * as axios from 'axios';
import { followAPI } from '../../api/api'
import { ReactComponent as UserPhoto } from '../../assets/icons/avatar-male.svg';
import css from './Users.module.css';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  let quant = 7;
  for (let p = Math.max(props.currentPage - quant, 1); p <= Math.max(1, Math.min(props.currentPage + quant, pagesCount)); p++) {
    pages.push(p);
  }

  return (
    <div className={css.usersPage}>
      <div className={css.pageLinks}>
        {props.currentPage > quant + 1
          ? <>
              <span className={css.pageNumber} onClick={(e) => {props.onPageChange(1)}}>{"|◄"}</span>
              <span>{"..."}</span>
            </>
          : ""
        }
        {pages.map( p => {
          return (
            <span
              className={`${css.pageNumber} ${props.currentPage === p ? css.selected : ""}`}
              onClick={(e) => {props.onPageChange(p)}}
              key={p}>
                {p}
            </span>
          )
        })}
        {props.currentPage < pagesCount - quant
          ? <>
              <span>{"..."}</span>
              <span
                className={css.pageNumber}
                onClick={(e) => {props.onPageChange(pagesCount)}}>
                {"►|"}
              </span>
            </>
          : ""
        }
      </div>

      {props.users.map( u => {
        return (
          <div className={css.user} key={u.id}>
            <div className={css.leftSide}>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  { u.photos.small
                    ? <img className={css.avatar} src={u.photos.small} alt="Avatar" />
                    : <UserPhoto className={css.avatar}/>
                  }
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {


                    // axios
                    // .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`)
                    followAPI.unfollow(u.id)
                    .then(data => {
                      if (data.resultCode === 0) {
                        props.unfollowUser(u.id)
                      }
                    });


                  }}>Unfollow</button>
                  : <button onClick={() => {


                    // axios
                    // .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {})
                    followAPI.follow(u.id)
                    .then(data => {
                      if (data.resultCode === 0) {
                        props.followUser(u.id)
                      }
                    });


                  }}>Follow</button>
                }
              </div>
            </div>
            <div className={css.rightSide}>
              <div className={css.info}>
                <div className={css.name}>{u.name}</div>
                {u.status
                  ? <div className={css.status}>{u.status}</div>
                  : <div className={css.email}>{"\u00A0"}</div>
                }
              </div>
              <div className={css.location}>
                <div>{false ? "u.location.country" : "\u00A0"}</div>
                <div>{false ? "u.location.city" : "\u00A0"}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Users;
