import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, status, myUserId, updateStatus}) => {
  return (
    <>
      <ProfileInfo {...{profile, status, myUserId, updateStatus}} />
      <MyPostsContainer />
    </>
  )
}

export default Profile;
