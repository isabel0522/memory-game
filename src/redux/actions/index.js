export const initBoard = () => ({
  type: 'INIT_BOARD'
})

export const updateCardsStatus = (cards, status) => ({
  type: 'UPDATE_CARDS_STATUS',
  cards,
  status
})

export const toggleCard = (cardId) => ({
  type: 'TOGGLE_CARD',
  cardId
})
