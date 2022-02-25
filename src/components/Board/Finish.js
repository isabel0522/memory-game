import React from 'react';
import { ReactComponent as TrophyIcon } from './../../assets/trophy.svg';

const Finish = ({handlePlayAgain}) => {
  return (
    <div className="finish">
      <TrophyIcon className="trophy" fill="#8b4513" width="200px" height="200px"></TrophyIcon>
      <p>Congratulations! You found all the matching cards!</p>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  )
}

export default Finish;
