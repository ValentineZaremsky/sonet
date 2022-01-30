import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map( p => <Post message={p.text} likes={p.likes} /> );

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.dispatch({ type: 'ADD_POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: 'UPDATE_POST', text: text };
    props.dispatch(action);
  }

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
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
