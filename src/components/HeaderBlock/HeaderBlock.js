import React from 'react';
import s from './HeaderBlock.module.scss';

const HeaderBlock = ({ hideBackground = false, children }) => {
  const styleColor = hideBackground ? {backgroundImage: 'none'} : {};
  
  return (
    <div 
      className={s.cover}
      style={styleColor}
      id="headerBlock"
    >
      <div className={s.wrap}>
        {children}
      </div>
    </div>
  );
};

export default HeaderBlock;
