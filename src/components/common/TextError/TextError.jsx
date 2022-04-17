import React from 'react';
import css from './TextError.module.css';

function TextError ({children}) {
  return (
    <div className={css.error}>{children}</div>
  )
}

export default TextError;
