import * as axios from 'axios';
import React from 'react';
import css from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {

    axios
      .get("https://randomuser.me/api/?results=4")
      .then(response => {
        props.setUsers(response.data.results);
      });

    // props.setUsers(
    //   [
    //     { id: 1, fullName: 'Sveta', followed: false, status: "I am so pretty",     location: {city: "Kyiv",   country: "Ukraine"},        avatar: 'https://png.pngtree.com/png-clipart/20210424/ourlarge/pngtree-black-hanging-evening-dress-cartoon-character-avatar-png-image_3232190.png'},
    //     { id: 2, fullName: 'Marek', followed: true,  status: "Friendship forever", location: {city: "Warsaw", country: "Poland"},         avatar: 'https://w7.pngwing.com/pngs/846/682/png-transparent-computer-icons-user-profile-avatar-avatar-heroes-service-head.png'},
    //     { id: 3, fullName: 'Jane',  followed: false, status: "Stay strong!",       location: {city: "London", country: "United Kingdom"}, avatar: 'https://w7.pngwing.com/pngs/439/19/png-transparent-avatar-user-profile-icon-women-wear-frock-face-holidays-women-accessories-thumbnail.png'}
    //   ]
    // )
  }

  return (
    <div className={css.usersPage}>
      {
        props.users.map( u =>
          <div className={css.user} key={u.id}>
            <div className={css.leftSide}>
              <div>
                <img className={css.avatar} src={u.picture.medium} alt="Avatar" />
              </div>
              <div>
                {
                  u.followed
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
      }
    </div>
  )
}

export default Users;
