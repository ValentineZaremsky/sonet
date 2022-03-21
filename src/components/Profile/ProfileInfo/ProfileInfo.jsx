import React from 'react';
import Preloader from '../../Preloader/Preloader';
import css from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={css.cover}>
        <img alt='Cover' src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div className={css.descriptionBlock}>
        <img className={css.avatar} src={props.profile.photos.large} alt="Avatar" />

        <div className={css.name}>{props.profile.fullName}</div>
        <div className={css.userId}>{props.profile.userId}</div>
        <div className={css.status}>{props.profile.aboutMe}</div>
        <div className={css.job}>{props.profile.lookingForAJob ? "Looking for a job" : "X"}</div>
        <div className={css.jobDesc}>{props.profile.lookingForAJobDescription}</div>

        <div className={css.contacts}>{props.profile.contacts.facebook  ? props.profile.contacts.facebook  : ""}</div>
        <div className={css.contacts}>{props.profile.contacts.website   ? props.profile.contacts.website   : ""}</div>
        <div className={css.contacts}>{props.profile.contacts.vk        ? props.profile.contacts.vk        : ""}</div>
        <div className={css.contacts}>{props.profile.contacts.twitter   ? props.profile.contacts.twitter   : ""}</div>
        <div className={css.contacts}>{props.profile.contacts.instagram ? props.profile.contacts.instagram : ""}</div>
        <div className={css.contacts}>{props.profile.contacts.youtube   ? props.profile.contacts.youtube   : ""}</div>
        <div className={css.contacts}>{props.profile.contacts.github    ? props.profile.contacts.github    : ""}</div>
        <div className={css.contacts}>{props.profile.contacts.mainLink  ? props.profile.contacts.mainLink  : ""}</div>
      </div>
    </div>
  )
}

export default ProfileInfo;
