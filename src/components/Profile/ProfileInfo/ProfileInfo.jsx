import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { ReactComponent as UserPhoto } from '../../../assets/icons/avatar-male.svg';
import Status from '../Status/Status'
import css from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div className={css.profileInfo}>
      <div className={css.cover}>
        <img alt='Cover' src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
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
              <div className={css.userId}>{profile.userId}</div>
              <Status status={status} updateStatus={updateStatus} />
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
              <div className={css.contacts}>{profile.contacts.facebook  ? "facebook: "  + profile.contacts.facebook  : ""}</div>
              <div className={css.contacts}>{profile.contacts.website   ? "website: "   + profile.contacts.website   : ""}</div>
              <div className={css.contacts}>{profile.contacts.vk        ? "vk: "        + profile.contacts.vk        : ""}</div>
              <div className={css.contacts}>{profile.contacts.twitter   ? "twitter: "   + profile.contacts.twitter   : ""}</div>
              <div className={css.contacts}>{profile.contacts.instagram ? "instagram: " + profile.contacts.instagram : ""}</div>
              <div className={css.contacts}>{profile.contacts.youtube   ? "youtube: "   + profile.contacts.youtube   : ""}</div>
              <div className={css.contacts}>{profile.contacts.github    ? "github: "    + profile.contacts.github    : ""}</div>
              <div className={css.contacts}>{profile.contacts.mainLink  ? "mainLink: "  + profile.contacts.mainLink  : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
