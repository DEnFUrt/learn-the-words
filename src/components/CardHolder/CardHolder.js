import React from 'react';
import Card from '../Card';
import { animateScroll as scroll } from 'react-scroll';

import s from './CardHolder.module.scss';

const CardHolder = (props) => {
  const {wordsList, ...cardProps} = props;

  return (
    <section
      className={s.container}
    >
      <div
        className={s.containerCards}
        id="cardHolder"
      >
        {
          wordsList.map((item, index) => <Card key={Date.now() + Math.random(0.5) + index} card={item} {...cardProps} />)
        }
      </div>
      <div
        className={s.containerBtn}
        onClick={() => {scroll.scrollToBottom()}}
      >Нажми...</div>
    </section>
  )
}

export default CardHolder;
