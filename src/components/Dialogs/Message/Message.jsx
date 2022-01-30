import React from 'react';
import css from './../Dialogs.module.css';

const Message = ({ message, align }) => {
  // console.log(`css.${align}`);
  return <div className={css.message}>{message}</div>
}

export default Message;
