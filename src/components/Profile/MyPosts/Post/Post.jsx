import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
  return (
    <div className={css.item}>
      <img alt='Avatar' src='https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png' />
      {props.message}
      <div className={css.likes}>
        <span>likes </span>{props.likes}
      </div>
    </div>
  )
}

export default Post;
