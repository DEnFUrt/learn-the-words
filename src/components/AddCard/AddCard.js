import React, { Component } from 'react';

import s from './AddCard.module.scss';


export default class AddCard extends Component {
  constructor(props) {
    super(props);
    
    this.form = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form.current);
    const eng = formData.get('engInput');
    const rus = formData.get('rusInput');
    
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
    
    this.form.current.reset();
  }

  render() {
    return (
      <form 
        className={s.newCardLabel}
        onSubmit={this.onSubmit}
        ref={this.form}
      >
        <input
          type="text"
          name="engInput"
          placeholder="English word..."
          pattern="^[a-zA-Z]+$"
          className={s.newCardInput}
          ref={this.engInput}
          required
        />
        <input
          type="text"
          name="rusInput"
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