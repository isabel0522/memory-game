import * as cardStatus from './../constants/cardStatus';

/**
 * Toggle Card status
 * 
 * @param {String} prevStatus 
 * @returns {String}
 */
const toggleCard = (prevStatus='down') => {
  if (prevStatus === cardStatus.CARD_MATCH) {
    return cardStatus.CARD_MATCH;
  }
  return prevStatus === cardStatus.CARD_DOWN ? cardStatus.CARD_UP : cardStatus.CARD_DOWN;
}

export default toggleCard;
