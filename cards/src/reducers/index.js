import { combineReducers } from 'redux';

let score = 0, previousCard = "";

const cardsReducer = () => {
    return [
        {title: 'A', id: '1'},
        {title: 'B', id: '2'},
        {title: 'A', id: '3'},
        {title: 'B', id: '4'},
        {title: 'C', id: '5'},
        {title: 'D', id: '6'},
        {title: 'C', id: '7'},
        {title: 'D', id: '8'},
    ];
};

const scoreReducer = () => {
    return {score: score};
};

// Not working since cardsReducer gets called at every mapStateToProps iteration
const deletedCardReducer = (deletedCard = null, action) => {
    let cards = cardsReducer(), deletedCards = [];
    if(action.type === 'DELETE_CARD') {
        for (let i = 0; i< cards.length; i++){
            if(deletedCard.title === cards[i].title){
                continue;
            } else {
                deletedCards.push(cards[i]);
            }
        }
    }

    return deletedCards;
};

const selectedCardReducer = (selectedCard = null, action) => {
    if(action.type === 'SELECT_CARD') {
        if(action.payload.title === previousCard){
            score += 1;
            deletedCardReducer(selectedCard, {type: 'DELETE_CARD'});
        } else {
            previousCard = action.payload.title;
        }
        return action.payload;
    }
    return selectedCard;
};


export default combineReducers({
    selectedCardReducer: selectedCardReducer,
    deletedCardReducer: deletedCardReducer,
    cardsReducer: cardsReducer,
    scoreReducer: scoreReducer
});