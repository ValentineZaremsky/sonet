import React from "react";
import { ReactComponent as Avatar } from '../../../assets/icons/avatar-male.svg';
import css from './ProfilePict.module.css';

const ProfilePict = ({ profile, isOwner, savePhoto }) => {

  const onPictChange = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={css.avatarBlock}>
      { profile.photos.large
        ? <img className={css.avatar} src={profile.photos.large} alt="Avatar" />
        : <Avatar className={css.avatar}/>
      }
      { isOwner &&
        <>
          <input type="file" id="upload" className={css.uploadInput} accept=".jpg,.png,.gif" onChange={onPictChange}/>
          <label className={css.uploadLabel} htmlFor="upload" title="Upload picture">
            <i className="fa-solid fa-xl fa-image"></i>
          </label>
        </>
      }
    </div>
  )
}

export default ProfilePict;
