import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, newPostText, addPost, updatePost }) => {
  let postsElements = posts.map( p => <Post message={p.text} likes={p.likes} /> );

  let newPostElement = React.createRef();

  let addNewPost = () => {
    addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    updatePost(text);
  }

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={newPostText} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={ addNewPost }>Add post</button>
        </div>
      </div>
      <div className={css.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;
