import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

//  ({ state, addPost, updatePost })
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updatePost={props.updatePost}
      />
    </div>
  )
}

export default Profile;
