import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import css from './Users.module.css';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChange, users, ...props}) => {
  return (
    <div className={css.usersPage}>
      <Paginator
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        half={7}
      />
      {
        users.map(u => <User
          user={u}
          key={u.id}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />)
      }
    </div>
  )
}

export default Users;
