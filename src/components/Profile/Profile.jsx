import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, status, isOwner, saveStatus, saveProfile, savePhoto}) => {
  return (
    <>
      <ProfileInfo {...{profile, status, isOwner, saveStatus, saveProfile, savePhoto}} />
      <MyPostsContainer isOwner={isOwner}/>
    </>
  )
}

export default Profile;
