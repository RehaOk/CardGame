export const selectCard = (card) => {
    return {
        type: 'SELECT_CARD',
        payload: card
    }
};

export const deleteCard  = (card) => {
    return {
        type: 'DELETE_CARD',
        payload: card
    }
};