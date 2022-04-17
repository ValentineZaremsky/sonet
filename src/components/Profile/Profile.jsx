import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, status, updateStatus}) => {
  return (
    <>
      <ProfileInfo {...{profile, status, updateStatus}} />
      <MyPostsContainer />
    </>
  )
}

export default Profile;
