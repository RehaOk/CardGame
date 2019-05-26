import React from 'react';
import { connect } from 'react-redux';

import {selectCard, deleteCard} from '../actions'
class Card extends React.Component {

    renderList(){
        return this.props.cards.map((card) => {
            return (
                <div className="ui two column grid" key={card.id}>
                    <div className="wide column">
                        <div className="ui card">
                            <div className="content">
                                <div className="header" style={{ textAlign: 'center', height: '50px' }}>
                                    <button style={{boxSizing: 'border-box', width: '100%', height: '100%'}}
                                        className="ui button primary"
                                        onClick={() => this.props.selectCard(card)}
                                    >
                                        {card.title}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });     
    }


    render(){
        return (
            <div className="ui container">{this.renderList()}</div>  
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {cards: state.cardsReducer};
}

export default connect(mapStateToProps, {selectCard: selectCard, deleteCard:deleteCard})(Card);