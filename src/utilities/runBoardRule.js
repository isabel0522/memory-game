import { CARD_UP } from './../constants/cardStatus';

const runBoardRule = (boardData, dispatch) => {
  const flippedCards = Object.keys(boardData).filter(key=>boardData[key].status === CARD_UP);
  if(flippedCards.length === 2) {
    if (boardData[flippedCards[0]].content === boardData[flippedCards[1]].content) {
      setTimeout(()=>{
        dispatch({type: 'MATCH_CARDS', cards: flippedCards});
      }, 1000);
    } else {
      setTimeout(()=>{
        dispatch({type: 'FLIP_DOWN_CARDS', cards: flippedCards});
      }, 1000);
    }

  }
}

export default runBoardRule;