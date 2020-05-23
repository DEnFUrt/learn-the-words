import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import HeaderBlock from '../HeaderBlock';
import FooterBlock from '../FooterBlock';
import Header from '../Header';
import BtnHeader from '../BtnHeader';
import Paragraph from '../Paragraph';
import CardHolder from '../CardHolder';
import {wordsList} from '../wordsList';
import Copyright from '../Copyright'

import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }

    this.addCard = this.addCard.bind(this);
    this.onChangeCard = this.onChangeCard.bind(this);
    this.onDelCard = this.onDelCard.bind(this);
  }

  onSetState(newCards) {
    this.setState(({ cards }) => ({ cards: newCards }),
      () => this.saveToLocalStorage(this.state.cards));
  }

  onChangeCard(card) {
    const oldCards = this.state.cards;
    const newCards = oldCards.map(
      item => item.id === card.id ? card : item
      );

    this.onSetState(newCards);
  }

  addCard(card) {
    const oldCards = this.state.cards;
    const newCards = [...oldCards, card];

    this.onSetState(newCards);
  }

  onDelCard(id) {
    const oldCards = this.state.cards;
    const newCards = oldCards.filter(card => card.id !== id);
    
    this.onSetState(newCards);
  }

  saveToLocalStorage(cards) {
    try {
      localStorage.setItem('wordsList', JSON.stringify(cards));
    } catch (e) {
        alert('Ошибка записи, последние изменения не сохранились! ', e.message);
    }
  }

  readFromLocalStorage() {
    const cards = JSON.parse(localStorage.getItem('wordsList')) || [];
    return  cards.length !== 0 ? cards : wordsList;
  }

  addData(cards) {
    cards.forEach((card, index) => {
      if (card.id === undefined) {
        card.id = Date.now() + Math.random(0.5) + index;
      }
      if (card.fixDone === undefined) {
        card.fixDone = false;
      }
    });
    return cards;
  }

  shouldComponentUpdate (nextProps, nextState) { 
    return (this.state.cards.length !== nextState.cards.length) 
  }

  componentDidMount() {
    scroll.scrollTo({ 
      duration: 1000,
      smooth: true,
      containerId: 'headerBlock',
    });

    const cards = this.addData(this.readFromLocalStorage());

    this.setState({cards});
  }

  render() {
    const {cards} = this.state;
  
    return (
      <>
        <HeaderBlock>
          <Header>
            Учите слова онлайн
          </Header>
          <Paragraph>
            Используйте карточки для заполнения и пополняйте активный словарный запас
          </Paragraph>
          <BtnHeader>
            Начните прямо сейчас!
          </BtnHeader>
        </HeaderBlock>
        <CardHolder
          wordsList={cards}
          onChangeCard = {this.onChangeCard}
          onDelCard = {this.onDelCard}
          onFixDoneCard = {this.onChangeCard}
        />
        <FooterBlock
          hideBackground
          onAddCard = {this.addCard}
        />
        <Copyright />
      </>
    );
    }
};

