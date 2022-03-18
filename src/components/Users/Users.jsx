import React from 'react';
import css from './Users.module.css';

let Users = (props) => {

  let pagesCount = Math.ceil(props.usersCount / props.pageSize);
  let pages = [];
  // for (let p = Math.max(this.props.currentPage - 5, 1); p <= Math.max(1, Math.min(this.props.currentPage + 5, pagesCount)); p++) {
  for (let p = 1; p <= pagesCount; p++) {
    pages.push(p);
  }

  return (
    <div className={css.usersPage}>
      <div className={css.pageLinks}>
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
      </div>

      {props.users.map( u => {
        return (
          <div className={css.user} key={u.id.value + u.name.last}>
            <div className={css.leftSide}>
              <div>
                <img className={css.avatar} src={u.picture.medium} alt="Avatar" />
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {props.unfollowUser(u.id)}}>Unfollow</button>
                  : <button onClick={() => {props.followUser(u.id)}}>Follow</button>
                }
              </div>
            </div>
            <div className={css.rightSide}>
              <div className={css.info}>
                <div className={css.name}>{u.name.first} {u.name.last}</div>
                <div className={css.email}>{u.email}</div>
              </div>
              <div className={css.location}>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Users;
