import React from 'react';
import css from './NoMatch.module.css';

const NoMatch = (props) => {
  return (
    <div className={css.noMatch}>
      Error 404: There is nothing here
    </div>
  )
}

export default NoMatch;
