import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div 
      className={s.footer}
    >
      <p>Уже всё выучили?</p>
      <p>Добавляйте карточки и продолжайте совершенствоваться!</p>
    </div> 
  );
}

export default Footer;