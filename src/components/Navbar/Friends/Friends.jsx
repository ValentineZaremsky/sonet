import React from 'react';
import css from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = ({friends}) => {
  let friendsElements = friends.map(f => {
    return <Friend key={f.id} name={f.name} id={f.id} avatar={f.photos.small} />
  });

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
