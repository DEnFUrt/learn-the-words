import React from 'react';
import s from './ButtonDelete.module.scss';

const ButtonDelete = (props) => {
  
  return (
    <div
    className={s.customBtn} 
    >
    <button 
      type="button" 
      onClick = {() => props.onDelCard()}
    >
      <span>&times;</span>
    </button>
    </div>
  )
}

export default ButtonDelete;