import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import ProfilePict from '../ProfilePict/ProfilePict';
import ProfileData from '../ProfileData/ProfileData';
import ProfileForm from '../ProfileForm/ProfileForm';
import css from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, isOwner, saveStatus, saveProfile, savePhoto }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const enableEdit = () => {
    setEditMode(true)
  };
  const disableEdit = () => {
    setEditMode(false)
  };

  return (
    <div className={css.profileInfo}>
      <div className={css.cover}>
        <img alt='Cover' src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' />
      </div>

      <div className={css.wrapper}>
        <ProfilePict {...{ profile, isOwner, savePhoto }}/>
        <div className={css.descriptionBlock}>
          { editMode
            ? <ProfileForm {...{ profile, saveProfile, disableEdit }}/>
            : <ProfileData {...{ profile, status, isOwner, saveStatus, enableEdit }}/>
          }
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
