import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
  return (
    <div className={css.item}>
      <div className={css.avatar}>
        <img alt='Avatar' src='https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png' />
      </div>
      <div className={css.wrapper}>
        <div className={css.message}>
          {props.message}
        </div>
        <div className={css.likes}>
          <span>Likes </span>{props.likes}
        </div>
      </div>
    </div>
  )
}

export default Post;
