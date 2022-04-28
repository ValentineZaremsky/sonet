import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, status, isOwner, updateStatus, savePhoto}) => {
  return (
    <>
      <ProfileInfo {...{profile, status, isOwner, updateStatus, savePhoto}} />
      <MyPostsContainer />
    </>
  )
}

export default Profile;
