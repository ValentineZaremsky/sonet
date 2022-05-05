import React from "react";
import Status from '../Status/Status'
import css from './ProfileData.module.css';

const ProfileData = ({ profile, status, isOwner, saveStatus, enableEdit }) => {
  return (
    <>
      <div className={css.infoHeader}>
        <div className={css.name}>{profile.fullName}</div>
        <div className={css.control}>
          { isOwner
            ? <button onClick={enableEdit}>Edit profile</button>
            : <button>Follow</button>
          }
        </div>
      </div>
      <div className={css.infoBlock}>
        <div className={css.statusBlock}>
          <div className={css.userId}>{profile.userId}</div>
          <Status status={status} saveStatus={saveStatus} isEditable={isOwner} />
          { profile.aboutMe
            ? <div className={css.status}>{profile.aboutMe}</div>
            : <div className={css.userId}>{"\u00A0"}</div>
          }
          <div className={css.job}>
            { profile.lookingForAJob ? "I am looking for a job. " : "\u00A0" }
            { profile.lookingForAJob && profile.lookingForAJobDescription &&
              <div>{profile.lookingForAJobDescription}</div>
            }
          </div>
        </div>
        <div className={css.contactsBlock}>
          { Object.keys(profile.contacts).map(key =>
            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
          )}
        </div>
      </div>
    </>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return (
    <>
      { contactValue && <div className={css[contactTitle]}>{contactValue}</div> }
    </>
  )
}

export default ProfileData;
