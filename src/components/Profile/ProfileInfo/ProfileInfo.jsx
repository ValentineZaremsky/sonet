import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { ReactComponent as Avatar } from '../../../assets/icons/avatar-male.svg';
import Status from '../Status/Status'
import css from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, isOwner, updateStatus, savePhoto }) => {
  if (!profile) {
    return <Preloader />
  }

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const cnt = profile.contacts;

  return (
    <div className={css.profileInfo}>
      <div className={css.cover}>
        <img alt='Cover' src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' />
      </div>

      <div className={css.wrapper}>
        <div className={css.avatarBlock}>
          { profile.photos.large
            ? <img className={css.avatar} src={profile.photos.large} alt="Avatar" />
            : <Avatar className={css.avatar}/>
          }
          { isOwner &&
            <>
              <input type="file" id="upload" className={css.uploadInput} accept=".jpg,.png,.gif" onChange={onAvatarSelected}/>
              <label className={css.uploadLabel} htmlFor="upload" title="Upload picture">
                <i class="fa-solid fa-xl fa-image"></i>
              </label>
            </>
          }
        </div>

        <div className={css.descriptionBlock}>
          <div className={css.name}>{profile.fullName}</div>
          <div className={css.infoBlock}>
            <div className={css.statusBlock}>
              <div className={css.userId}>{profile.userId}</div>
              <Status status={status} updateStatus={updateStatus} isEditable={isOwner} />
              { profile.aboutMe
                ? <div className={css.status}>{profile.aboutMe}</div>
                : <div className={css.userId}>{"\u00A0"}</div>
              }
              <div className={css.job}>{profile.lookingForAJob ? "Looking for a job" : "\u00A0"}</div>
              { profile.lookingForAJobDescription
                ? <div className={css.jobDesc}>{profile.lookingForAJobDescription}</div>
                : <div className={css.userId}>{"\u00A0"}</div>
              }
            </div>

            <div className={css.contactsBlock}>
              {cnt.facebook  ? <div className={css.facebook}>  {cnt.facebook}  </div> : ""}
              {cnt.twitter   ? <div className={css.twitter}>   {cnt.twitter}   </div> : ""}
              {cnt.instagram ? <div className={css.instagram}> {cnt.instagram} </div> : ""}
              {cnt.youtube   ? <div className={css.youtube}>   {cnt.youtube}   </div> : ""}
              {cnt.github    ? <div className={css.github}>    {cnt.github}    </div> : ""}
              {cnt.website   ? <div className={css.website}>   {cnt.website}   </div> : ""}
              {cnt.vk        ? <div className={css.vk}>        {cnt.vk}        </div> : ""}
              {cnt.mainLink  ? <div className={css.mainLink}>  {cnt.mainLink}  </div> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
