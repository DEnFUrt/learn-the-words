import React from 'react';
import s from './HeaderBlock.module.scss';
import { ReactComponent as ReactLogoSvg } from '../../logo.svg';

const HeaderBlock = () => {
  return (
    <div className={s.cover}>
      <div className={s.wrap}>
        <h1 className={s.header}>Учите слова онлайн</h1>
          <ReactLogoSvg />
        <p className={s.decr}>Используйте карточки для запоминания и пополняйте активный словарный запас.</p>
      </div>
    </div>
  );
};

export default HeaderBlock;
