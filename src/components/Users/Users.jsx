import React from 'react';
import * as axios from 'axios';
import css from './Users.module.css';

class Users extends React.Component {

  componentDidMount() {
    axios
    .get("https://randomuser.me/api/?results=4")
    .then(response => {
      this.props.setUsers(response.data.results);
    });
  }

  render() {
    return (
      <div className={css.usersPage}>
        {
          this.props.users.map( u =>
            <div className={css.user} key={u.id}>
              <div className={css.leftSide}>
                <div>
                  <img className={css.avatar} src={u.picture.medium} alt="Avatar" />
                </div>
                <div>
                  {
                    u.followed
                      ? <button onClick={() => {this.props.unfollowUser(u.id)}}>Unfollow</button>
                      : <button onClick={() => {this.props.followUser(u.id)}}>Follow</button>
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
        }
      </div>
    )
  }
}

export default Users;
