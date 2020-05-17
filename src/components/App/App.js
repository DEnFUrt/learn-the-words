import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import HeaderBlock from '../HeaderBlock';
import FooterBlock from '../FooterBlock';
import Header from '../Header';
import Paragraph from '../Paragraph';
import Button from '../Button';
import CardHolder from '../CardHolder';
import {wordsList} from '../wordsList';

import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }

    this.addCard = this.addCard.bind(this);
    this.onChangeCard = this.onChangeCard.bind(this);
  }

  onChangeCard(card) {
    const oldCards = this.state.cards;
    
    const newCards = oldCards.map(
      item => item.eng === card.eng ? {...item, done: card.done} : item
      );

    this.setState({cards: newCards},
      () => this.saveToLocalStorage(this.state.cards));
  }

  addCard(card) {
    const oldCards = this.state.cards;
    const newCards = [...oldCards, card];

    this.setState({cards: newCards},
      () => this.saveToLocalStorage(this.state.cards));
  }

  saveToLocalStorage(cards) {
    try {
      localStorage.setItem('wordsList', JSON.stringify(cards));
    } catch (e) {
        alert('Ошибка записи: ', e.message);
    }
  }

  readLocalFromStorage() {
    return JSON.parse(localStorage.getItem('wordsList')) || wordsList;
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
    const cards = this.readLocalFromStorage();
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
          <Button>
            Начните прямо сейчас!
          </Button>
        </HeaderBlock>
        <CardHolder
          wordsList={cards}
          onChangeCard = {this.onChangeCard}
        ></CardHolder>
        <FooterBlock
          hideBackground
          onAdd = {this.addCard}
        ></FooterBlock>
      </>
    );
    }
};

