import React from 'react';
import AddCard from '../AddCard';
import Footer from '../Footer';

import s from './FooterBlock.module.scss';

const HeaderBlock = ({ hideBackground = false, onAdd, children }) => {
  const styleColor = hideBackground ? {backgroundImage: 'none'} : {};
  
  return (
    <div className={s.cover} style={styleColor}>
      <div className={s.wrap}>
        <Footer/>
        <AddCard
          onAdd={(card) => onAdd(card)}
        />
        {children}
      </div>
    </div>
  );
};

export default HeaderBlock;
