import React from 'react';
import css from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = ({ friends }) => {

  let friendsElements = friends.map(f => <Friend name={f.name} id={f.id} avatar={f.avatar} />);

  return (
    <div className={css.friends}>
      <h3 className={css.header}>Friends</h3>
      <div className={css.friendsItems}>
        { friendsElements }
      </div>
    </div>
  )
}

export default Friends;
