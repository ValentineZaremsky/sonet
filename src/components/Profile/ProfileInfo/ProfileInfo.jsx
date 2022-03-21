import React from 'react';
import Preloader from '../../Preloader/Preloader';
import { ReactComponent as UserPhoto } from '../../../assets/icons/avatar-male.svg';
import css from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={css.profileInfo}>
      <div className={css.cover}>
        <img alt='Cover' src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>

      <div className={css.wrapper}>
        <div className={css.avatarBlock}>
          { props.profile.photos.large
            ? <img className={css.avatar} src={props.profile.photos.large} alt="Avatar" />
            : <UserPhoto className={css.avatar}/>
          }
        </div>

        <div className={css.descriptionBlock}>
          <div className={css.name}>{props.profile.fullName}</div>
          <div className={css.userId}>{props.profile.userId}</div>
          {props.profile.aboutMe
            ? <div className={css.status}>{props.profile.aboutMe}</div>
            : <div className={css.userId}>{"\u00A0"}</div>
          }
          <div className={css.job}>{props.profile.lookingForAJob ? "Looking for a job" : "\u00A0"}</div>
          {props.profile.lookingForAJobDescription
            ? <div className={css.jobDesc}>{props.profile.lookingForAJobDescription}</div>
            : <div className={css.userId}>{"\u00A0"}</div>
          }
        </div>

        <div className={css.contactsBlock}>
          <div className={css.contacts}>{props.profile.contacts.facebook  ? "facebook: "  + props.profile.contacts.facebook  : ""}</div>
          <div className={css.contacts}>{props.profile.contacts.website   ? "website: "   + props.profile.contacts.website   : ""}</div>
          <div className={css.contacts}>{props.profile.contacts.vk        ? "vk: "        + props.profile.contacts.vk        : ""}</div>
          <div className={css.contacts}>{props.profile.contacts.twitter   ? "twitter: "   + props.profile.contacts.twitter   : ""}</div>
          <div className={css.contacts}>{props.profile.contacts.instagram ? "instagram: " + props.profile.contacts.instagram : ""}</div>
          <div className={css.contacts}>{props.profile.contacts.youtube   ? "youtube: "   + props.profile.contacts.youtube   : ""}</div>
          <div className={css.contacts}>{props.profile.contacts.github    ? "github: "    + props.profile.contacts.github    : ""}</div>
          <div className={css.contacts}>{props.profile.contacts.mainLink  ? "mainLink: "  + props.profile.contacts.mainLink  : ""}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
