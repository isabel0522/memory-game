import { CARD_MATCH } from './../constants/cardStatus';

const checkFinish = (boardData) => {
  return Object.keys(boardData).every(key=>boardData[key].status === CARD_MATCH);
}

export default checkFinish;