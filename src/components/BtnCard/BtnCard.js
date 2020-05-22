import React from 'react';
import s from './BtnCard.module.scss';

const BtnCard = (props) => {
  const {btnClass, btnEvent, btnType, btnTitle, fixedCard = false} = props;
  let btnClassName = [s.btn];

  switch (btnClass) {
    case 'btnDelCard' : btnClassName = [...btnClassName, s.btnDelCard]
      break;
  
    case 'btnFixCard' : btnClassName = [...btnClassName, s.btnFixCard] 
      break;

    default:
      break;
  }

  const styleVisibility = fixedCard ? {visibility: 'hidden'} : {visibility: 'visible'};

  return (
    <button
      className={btnClassName.join(' ')}
      type={btnType} 
      onClick = {btnEvent}
      style={styleVisibility}
    >
      <span>{btnTitle}</span>
    </button>
  )
}

export default BtnCard;