import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { ReactComponent as UserPhoto } from '../../../assets/icons/avatar-male.svg';
import Status from '../Status/Status'
import css from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, myUserId, updateStatus }) => {
  if (!profile) {
    return <Preloader />
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
            : <UserPhoto className={css.avatar}/>
          }
        </div>

        <div className={css.descriptionBlock}>
          <div className={css.name}>{profile.fullName}</div>
          <div className={css.infoBlock}>
            <div className={css.statusBlock}>
              <div className={css.userId}>{profile.userId} / {myUserId}</div>
              <Status status={status} updateStatus={updateStatus} isEditable={profile.userId === myUserId} />
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
