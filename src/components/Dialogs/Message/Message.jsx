import React from 'react';
import css from './../Dialogs.module.css';

const Message = ({ id, message, align }) => {
  // console.log(`css.${align}`);
  return <div className={css.message}>{id}) {message}</div>
}

export default Message;
