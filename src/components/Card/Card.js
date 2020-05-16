import React, { Component } from 'react';
import s from './Card.module.scss';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {
                eng: '',
                rus: '',
                done: false,
            }
        }

        this.onToggleCard = this.onToggleCard.bind(this);
    }

    setCardClass(done) {
        const cardClass = [s.card];
        const result = done ? [...cardClass, s.done] : cardClass;

        return result;
    }

    onToggleCard() {
        const oldCard = this.state.card;
        const newCard = {...oldCard, done : !oldCard.done};

        this.setState({card: newCard},
            () => this.props.onChangeCard(this.state.card));
    }

    componentDidMount() {
        this.setState({card: this.props.card});
    }

    render() {
        const {eng, rus, done} = this.state.card;
        const cardClass = this.setCardClass(done);
        
        return (
                <div 
                    className={cardClass.join(' ')}
                    onClick={this.onToggleCard}
                >
                    <div className={s.cardInner}>
                        <div className={s.cardFront}>
                            <span>{ eng }</span>
                        </div>
                        <div className={s.cardBack}>
                            <span>{ rus }</span>
                        </div>
                    </div>
                    
                </div>
            );
        }
}
