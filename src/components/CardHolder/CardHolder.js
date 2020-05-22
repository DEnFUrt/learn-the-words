import React from 'react';
import Card from '../Card';
import { animateScroll as scroll } from 'react-scroll';

import s from './CardHolder.module.scss';

const CardHolder = (props) => {
  const {wordsList, ...cardProps} = props;
  let cards = [];

  if (wordsList.length > 0) {
    cards = wordsList.map(item => <Card key={item.id} card={item} {...cardProps} />)
  } else {
    cards = (
      <h1
        style={ {color: 'white', fontSize: '2.5rem'} }
      >☹ Упс... Карточек больше нет...</h1>
    );
  }

  return (
    <section
      className={s.container}
    >
      <div
        className={s.containerCards}
        id="cardHolder"
      >
        {cards}
      </div>
      <div
        className={s.containerBtn}
        onClick={() => {scroll.scrollToBottom()}}
      >Нажми...</div>
    </section>
  )
}

export default CardHolder;
