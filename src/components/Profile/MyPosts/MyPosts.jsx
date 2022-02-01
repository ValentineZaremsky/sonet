import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer'

const MyPosts = (props) => {
  let state = props.profilePage;

  let postsElements = state.posts.map( p => <Post message={p.text} likes={p.likes} /> );
  let newPostText = state.newPostText;

  let onSendPost = () => {
    props.addNewPost();
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.changePost(text);
  }

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={newPostText}
            placeholder='Enter your post'
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={onSendPost}>Add post</button>
        </div>
      </div>
      <div className={css.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;
