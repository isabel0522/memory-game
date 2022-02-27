import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as TrophyIcon } from './../../assets/trophy.svg';
import { initBoard } from './../../redux/actions';

// Re-init board if play again button is clicked
const handlePlayAgain = (dispatch) => {
  dispatch(initBoard());
}

const GameComplete = () => {
  const dispatch = useDispatch();
  return (
    <div className="finish">
      <TrophyIcon className="trophy" fill="#8b4513" width="200px" height="200px"></TrophyIcon>
      <p>Congratulations! You found all the matching cards!</p>
      <button onClick={() => {handlePlayAgain(dispatch)}}>Play Again</button>
    </div>
  )
}

export default GameComplete;
