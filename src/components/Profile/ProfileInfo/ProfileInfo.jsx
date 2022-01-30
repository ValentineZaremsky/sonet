import React from 'react';
import css from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div className={css.cover}>
        <img alt='Cover' src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div className={css.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
