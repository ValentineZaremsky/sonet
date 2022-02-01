import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer'

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let updatePost = (text) => {
    props.store.dispatch(updatePostActionCreator(text));
  }

  return <MyPosts profilePage={state} addNewPost={addPost} changePost={updatePost} />;
}

export default MyPostsContainer;
