import React, { Component } from 'react';

import s from './AddCard.module.scss';


export default class AddCard extends Component {
  constructor(props) {
    super(props);
    
    this.engInput = React.createRef();
    this.rusInput = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const eng = this.engInput.current.value,
          rus = this.rusInput.current.value;
    
    if (eng.trim() === '' || rus.trim() === '') {
      return
    }
    this.props.onAddCard({
      eng,
      rus,
      done: false,
      id: Date.now() + Math.random(0.5),
      fixDone: false,
    });
    
    this.engInput.current.value = '';
    this.rusInput.current.value = '';
  }

  render() {
    return (
      <form 
        className = {s.newCardLabel}
        onSubmit = {this.onSubmit}
      >
        <input
          type="text"
          placeholder="English word..."
          pattern="^[a-zA-Z]+$"
          className = {s.newCardInput}
          ref = {this.engInput}
          required
        />
        <input
          type="text"
          placeholder="Русское слово..."
          pattern="^[А-Яа-яЁё\s]+$" 
          className={s.newCardInput}
          ref={this.rusInput}
          required
        />
        <button
          type="submit"
          className={s.newCardBtn}
        >
          Добавить
        </button>
      </form>
    );
  }

}  