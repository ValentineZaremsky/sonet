import React from 'react';
import css from './TextError.module.css';

function TextError (props) {
  return (
    <div className={css.error}>{props.children}</div>
  )
}

export default TextError;
