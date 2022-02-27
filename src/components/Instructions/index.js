import React from 'react';
import './index.css';

const Instruction = () => {
  return (
    <div className="instructions">
      <h1>Memory Matching Game</h1>
      <p>How to play:</p>
      <ul>
        <li>Flip the cards to reveal the picture.</li>
        <li>If you found a matching picture, you got the 2 cards.</li>
        <li>Let's find all the matching pictures!</li>
      </ul>
    </div>
  )
}

export default Instruction;