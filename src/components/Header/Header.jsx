import React from 'react';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <img alt='Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Blue_globe_icon.svg/2000px-Blue_globe_icon.svg.png' />
      <div className={css.headName}>
        IT-Kamasutra
      </div>
    </header>
  )
}

export default Header;
