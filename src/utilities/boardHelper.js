import * as cardStatus from './../constants/cardStatus';

/**
 * Check if game is completed
 * 
 * @param {Object} boardData 
 * @returns {Boolean}
 */
export const checkComplete = (boardData) => {
  if (!boardData) {
    return false;
  }
  return Object.keys(boardData).every(key=>boardData[key].status === cardStatus.CARD_MATCH);
}

/**
 * Run Board Rule
 *   Two facing up cards with same content should return two_cards_match state
 *   Two facing up cards with different content should return two_cards_not_match state
 *   Otherwise nothing will happen
 * 
 * @param {Object} boardData 
 * @returns {Array}
 */
export const runBoardRule = (boardData) => {
  if (!boardData) {
    throw new Error(`boardData cannot be empty`); 
  }
  const flippedCards = Object.keys(boardData).filter(key=>boardData[key].status === cardStatus.CARD_UP);
  if(flippedCards.length === 2) {
    if (boardData[flippedCards[0]].content === boardData[flippedCards[1]].content) {
      return [flippedCards, cardStatus.TWO_CARDS_MATCH];
    }
    return [flippedCards, cardStatus.TWO_CARDS_NOT_MATCH];
  }
  return [[], ""];
}

