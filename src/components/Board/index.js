import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { runBoardRule, checkComplete } from '../../utilities/boardHelper';
import { CARD_MATCH, CARD_DOWN, CARD_UP, TWO_CARDS_MATCH, TWO_CARDS_NOT_MATCH, FLIP_DELAY } from './../../constants/cardStatus';
import Card from '../Card';
import GameComplete from './../GameComplete';
import { updateCardsStatus, toggleCard } from './../../redux/actions';

/**
 * Run board rule once two cards are facing up
 *   If both cards have same content, then update both with status match
 *   If both cards ahve different content, then update both with status down
 * 
 * @param {Function} dispatch 
 * @param {Object} boardData 
 */
const updateBoardStatus = (dispatch, boardData) => {
  const [flippedCards, matchStatus] = runBoardRule(boardData);
  if (matchStatus === TWO_CARDS_MATCH) {
    setTimeout(()=>{
      dispatch(updateCardsStatus(flippedCards, CARD_MATCH));
    }, FLIP_DELAY);

  } else if (matchStatus === TWO_CARDS_NOT_MATCH) {
      setTimeout(()=>{
        dispatch(updateCardsStatus(flippedCards, CARD_DOWN));
      }, FLIP_DELAY);
  }
}

const handleCardClick = (dispatch, id, boardData) => {
  // handle if card need to be flipped up
  if(boardData[id].status === CARD_DOWN) {
    // check if two are already up
    const flippedCards = Object.keys(boardData).filter(key=>boardData[key].status === CARD_UP);
    // only make two cards up, not the 3rd one and more
    if(flippedCards.length < 2) {
      dispatch(toggleCard(id));
    }
  } else {
    // handle if card need to be flipped down
    dispatch(toggleCard(id));
  }
}

const Board = () => {
  // Select boardData
  const boardData = useSelector((state) => state.board);
  const dispatch = useDispatch();
  
  // Update board once two cards are facing up
  updateBoardStatus(dispatch, boardData);
  
  console.log('boardData', boardData);

  // Check if game is completed
  if(checkComplete(boardData)) {
    return <GameComplete></GameComplete>
  }
  // Render the cards
  return (
    <div className='board'>
      {Object.keys(boardData).map(key=>(
        <Card key={key} cardId={key} cardData={boardData[key]} handleCardClick={()=>{handleCardClick(dispatch, key, boardData)}} ></Card>
      ))}
    </div>
  )
}

export default Board;