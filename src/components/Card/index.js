import React, { useState } from 'react';
import './card.css';

const Card = ({cardId, cardData, handleCardClick}) => {
  const {status, content} = cardData;

  return (
    <div className="scene">
      <div className={`card ${status}`}>
        <div className="card__face card__face--front" onClick={()=>handleCardClick(cardId)}>
          <img src={`./assets/mario/${content}.png`} alt={`card face up ${content}`} />
        </div>
        <div className="card__face card__face--back" onClick={()=>handleCardClick(cardId)}>
          <img src='./assets/mario/down.png' alt={`card face down`} />
        </div>
      </div>
    </div>
  )
}

export default Card;