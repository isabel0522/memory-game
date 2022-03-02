import React from 'react';
import './index.css'; 

/**
 * Once a card is clicked, toggle its status
 * 
 * @param {Function} dispatch 
 * @param {String} id 
 */

const Card = ({ cardId, cardData, handleCardClick }) => {
  // Throw error if card props are missing
  if (!cardId || !cardData) {
    throw new Error('card props are missing');
  }

  const {status, content} = cardData;
  return (
    <div className="scene">
      <div className={`card ${status}`}>
        <div className="card__face card__face--front" onClick={handleCardClick}>
          <img src={`./assets/mario/${content}.png`} alt={`card face up ${content}`} />
        </div>
        <div className="card__face card__face--back" onClick={handleCardClick}>
          <img src='./assets/mario/down.png' alt={`card face down`} />
        </div>
      </div>
    </div>
  )
}

export default Card;