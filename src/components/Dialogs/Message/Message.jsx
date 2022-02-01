import React from 'react';
import css from './../Dialogs.module.css';

const Message = ({ id, message, align }) => {
  return (
    <div className={ `${css.message} ${css[`${align}`]}` }>
      {message}
    </div>
  )
}

export default Message;
